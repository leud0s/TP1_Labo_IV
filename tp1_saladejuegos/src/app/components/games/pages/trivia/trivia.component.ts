import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss']
})
export class TriviaComponent implements OnInit{
  pokemonImage: string;
  options: string[] = [];

  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit() {
    this.getRandomPokemon();
    console.log(this.getRandomPokemon());
  }

  getRandomPokemon() {
    this.pokeapiService.getRandomPokemon().subscribe(
      (response) => {
        const pokemonName = response.name[0].toUpperCase() + response.name.substring(1);
        const imageUrl = response.sprites.front_default;
        this.pokemonImage = imageUrl;
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
          }
        );
      }
    }
  }

  getRandomPokemonName() {
    const randomId = Math.floor(Math.random() * 151) + 1;
    return this.pokeapiService.getPokemonNameById(randomId);
  }

  checkAnswer(selectedName: string, correctName: string) {
    if (selectedName === correctName) {
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
        }
      });
    } else {
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
        }
      });
    }
    this.getRandomPokemon();
  }
}

