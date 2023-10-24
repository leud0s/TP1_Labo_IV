import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Results } from 'src/app/models/results.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import { ResultsService } from 'src/app/services/results.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss']
})
export class TriviaComponent implements OnInit{
  pokemonImage: string;
  options: string[] = [];
  score: number = 0;
  pokemonNameCorrect: string;
  resultGame !: Results;
  rounds : number = 0;
  user: any;
  loading:boolean =false;
  constructor(private pokeapiService: PokeapiService, 
    private resServ : ResultsService,
    private auth: FirebaseService,
    private router: Router) { }

  ngOnInit() {
    this.getRandomPokemon();
    //console.log(this.getRandomPokemon());
    this.auth.getUserLogged().subscribe(
      user=>{
        console.log(user);
        this.user = user;
      }
    )
  }

  getRandomPokemon() {
    this.pokeapiService.getRandomPokemon().subscribe(
      (response) => {
        const pokemonName = response.name[0].toUpperCase() + response.name.substring(1);
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${response.id}.png`/*response.sprites.front_default*/;
        this.pokemonImage = imageUrl;
        this.pokemonNameCorrect =pokemonName.toUpperCase();
        this.generateOptions(response.id, pokemonName);
      },
      (error) => {
        console.error('Error al obtener un Pokémon aleatorio: ', error);
      }
    );
  }

  generateOptions(correctId: number, correctName: string) {
    const correctOptionIndex = Math.floor(Math.random() * 4);

    this.options = [];
    for (let i = 0; i < 4; i++) {
      if (i === correctOptionIndex) {
        this.options.push(correctName.toUpperCase());
      } else {
        this.getRandomPokemonName().subscribe(
          (name) => {
            this.options.push(name.toUpperCase());
            this.shuffleOptions();
          }
        );
      }
    }
    this.shuffleOptions();
  }
  shuffleOptions() {
    this.options.sort(() => Math.random() - 0.5);
  }
  getRandomPokemonName() {
    const randomId = Math.floor(Math.random() * 802) + 1;
    return this.pokeapiService.getPokemonNameById(randomId);
  }

  checkAnswer(selectedName: string, correctName: string) {
    this.rounds +=1;
    if (selectedName === correctName) {
      this.score += 5;
   
      Swal.fire({
        title: '¡Correcto! El Pokémon es ' + correctName +'.\n<hr>',
        text: 'Querés seguir jugando?',
        imageUrl: this.pokemonImage,
        imageWidth: 200,
        imageHeight: 200,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Si',
        cancelButtonColor: '#d33',
        showCancelButton: true,
        cancelButtonText: 'No',
        background: '#7c1ca4',
        color: '#fff'
      }).then((result) => {
        if (!result.isConfirmed) {
          this.saveResults();
        }
      });
    } else {
       this.score -= 2;
       if(this.score < 0) this.score = 0;
      
      Swal.fire({
        title: 'Incorrecto... El Pokémon era ' + correctName +'.\n<hr>',
        text: 'Querés seguir jugando?',
        imageUrl: this.pokemonImage,
        imageWidth: 200,
        imageHeight: 200,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Si',
        cancelButtonColor: '#d33',
        showCancelButton: true,
        cancelButtonText: 'No',
        background: '#7c1ca4',
        color: '#fff'
      }).then((result) => {
        if (!result.isConfirmed) {
          this.saveResults();
        }
      });
    }
    this.getRandomPokemon();
  }
  saveResults(){
    let date = new Date();
    let dateString = date.toString();
    this.resultGame = {
      uid: this.user.uid,
      mail: this.user.email,
      date: dateString,
      game: 'PokePreguntados',
      points: this.score,
      rounds: this.rounds
    }
    this.resServ.saveResults(this.resultGame);
  }
}

