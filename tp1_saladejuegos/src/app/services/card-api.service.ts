import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardApiService {
  private apiUrl = 'https://deckofcardsapi.com/api/deck';
  constructor(private http: HttpClient) { }
  createDeck(): Observable<any> {
    return this.http.get(`${this.apiUrl}/new/shuffle/?deck_count=1`);
  }

  // Método para obtener una carta del mazo
  drawCard(deckId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${deckId}/draw/?count=1`);
  }
}
