import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getRandomPokemon(): Observable<any> {
    const randomId = Math.floor(Math.random() * 151) + 1;
    return this.http.get(`${this.apiUrl}/${randomId}`);
  }

  getPokemonById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
