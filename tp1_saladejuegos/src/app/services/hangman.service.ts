import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HangmanService {
  private palabras: string[] = [
        "abandonar",
        "abecedario",
        "abrazo",
        "abrir",
        "aceituna",
        "acompañar",
        "actitud",
        "adelante",
        "adivinar",
        "afectar",
        "agradable",
        "agua",
        "ahorrar",
        "aire",
        "alegría",
        "almohada",
        "amabilidad",
        "amigo",
        "anaranjado",
        "animal",
        "aniversario",
        "ansiedad",
        "apellido",
        "aprender",
        "aprovechar",
        "arcoiris",
        "arena",
        "aroma",
        "arte",
        "asegurar",
        "asombro",
        "atardecer",
        "atención",
        "aventura",
        "ayuda",
        "bailar",
        "belleza",
        "bendición",
        "beso",
        "bicicleta",
        "bolígrafo",
        "brillante",
        "caminar",
        "candado",
        "caricia",
        "castillo",
        "celebrar",
        "cerebro",
        "cielo",
        "cine",
        "claridad",
        "colores",
        "comer",
        "compañero",
        "conciencia",
        "confianza",
        "conocimiento",
        "conversación",
        "corazón",
        "cosecha",
        "creatividad",
        "cuidar",
  ];
  private palabraSeleccionada: string;
  private letrasAdivinadas: string[] = [];
  private intentosRestantes = 6;

  constructor() {
    this.palabraSeleccionada = this.palabras[Math.floor(Math.random() * this.palabras.length)];
  }

  obtenerPalabraMostrada(): string {
    let palabraMostrada = '';
    for (const letra of this.palabraSeleccionada) {
      if (this.letrasAdivinadas.includes(letra)) {
        palabraMostrada += letra + ' ';
      } else {
        palabraMostrada += '_ ';
      }
    }
    return palabraMostrada.trim();
  }

  adivinarLetra(letra: string): void {
    const letraMinuscula = letra.toLowerCase();
    if (!this.letrasAdivinadas.includes(letraMinuscula)) {
      this.letrasAdivinadas.push(letraMinuscula);
      if (!this.palabraSeleccionada.includes(letraMinuscula)) {
        this.intentosRestantes--;
      }
    }
  }

  obtenerIntentosRestantes(): number {
    return this.intentosRestantes;
  }

  obtenerPalabraSeleccionada(): string {
    return this.palabraSeleccionada;
  }
}