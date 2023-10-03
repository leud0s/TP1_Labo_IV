import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss']
})
export class TriviaComponent {
  pokemonImage: string;
  options: number[] = [];

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
      const id = (i === correctOptionIndex) ? correctId : Math.floor(Math.random() * 151) + 1;
      this.options.push(id);
    }
  }

  checkAnswer(selectedId: number, correctId: number) {
    if (selectedId === correctId) {
      alert('¡Correcto! ¡Ese es el Pokémon!');
    } else {
      alert('Incorrecto. ¡Sigue intentando!');
    }
    this.getRandomPokemon();
  }
}

