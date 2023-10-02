import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss']
})
export class TriviaComponent {
  pokemonImage: string;
  options: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getRandomPokemon();
  }

  async getRandomPokemon() {
    try {
      const randomId = Math.floor(Math.random() * 151) + 1;
      const response: any = await this.http.get(apiUrl + randomId).toPromise();
      const pokemonName = response.name[0].toUpperCase() + response.name.substring(1);
      const imageUrl = response.sprites.front_default;
      this.pokemonImage = imageUrl;
      this.generateOptions(randomId, pokemonName);
    } catch (error) {
      console.error('Error al cargar el Pokémon: ', error);
    }
  }

  generateOptions(correctId: number, correctName: string) {
    const correctOptionIndex = Math.floor(Math.random() * 4);
  
    this.options = [];
    for (let i = 0; i < 4; i++) {
      let id = (i === correctOptionIndex) ? correctId : Math.floor(Math.random() * 151) + 1;
      this.options.push(id);
    }
  }
  

  getRandomName(): string {
    const names = ['Bulbasaur', 'Charizard', 'Pikachu', 'Squirtle', 'Jigglypuff', 'Mewtwo', 'Gengar', 'Eevee', 'Snorlax', 'Machop'];
    return names[Math.floor(Math.random() * names.length)];
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

