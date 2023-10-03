import { Component, OnInit } from '@angular/core';
import { Results } from 'src/app/models/results.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ResultsService } from 'src/app/services/results.service';
import { worlds } from 'src/app/models/worlds.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss']
})

export class HangmanComponent {
  letters:string[]=[];
  lettersUsed : string[]=[];
  worldList:string[] = worlds;
  maxErrors:number = 0;  
  worldRandom:string = '';
  worldSelected:string[]=[];
  codedWorld:string='';
  countLetter:number = 0;
  successes : number = 0;
  times : number = 0;
  usuario : any;
  resultGame !: Results;
  constructor(private resServ : ResultsService,private auth : FirebaseService) {
    this.auth.getUserLogged().subscribe(
      user=>{
        console.log(user);
        this.usuario = user;
      }
    )
    
  }

  ngOnInit(): void {
    this.loadGame();
  }

  loadLetters(){
    this.letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    this.lettersUsed = [];
  }

  loadGame(){
    
    this.loadLetters();
    this.maxErrors = 6;
    const index = Math.floor(Math.random() * (this.worldList.length -1));
    
    this.worldRandom = this.worldList[index];
    this.countLetter = this.worldRandom.length;
    for (let i = 0; i < this.worldRandom.length; i++) {
      this.worldSelected.push('_')
    }
    this.codedWorld = this.worldSelected.join(' ');
  }

  verifyLetter(letter:string){
    this.lettersUsed.push(letter);
    this.letters = this.letters.filter(item => item !== letter);
    if(this.worldRandom.includes(letter)){
      for (let i = 0; i < this.worldRandom.length; i++) {
        if(this.worldRandom[i] == letter){
          this.worldSelected[i] = letter;
          this.countLetter--;
        }
      } 
      this.codedWorld = this.worldSelected.join(' ');     
    }else{
      this.maxErrors--;
    }
    if(this.countLetter == 0)  this.winner();
    if(this.maxErrors == 0)  this.loser();
  }

  loser(){
    this.times++;
    Swal.fire({
      title: 'Perdiste, la palabra era: '+this.worldRandom+'.\nQuerés seguir jugando?',
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Si',
      cancelButtonColor: '#d33',
      showCancelButton: true,
      cancelButtonText: 'No'
    }).then((result) => {
      if (!result.isConfirmed) {
        this.guardarResultados();
      }
    })
    this.worldRandom = '';
    this.worldSelected=[];
    this.codedWorld='';    
    this.countLetter = 0;
    this.loadGame();
  }
  winner(){
    this.times++;
    this.successes++;
    Swal.fire({
      title: 'Ganaste!!\nQuerés seguir jugando?',
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Si',
      cancelButtonColor: '#d33',      
      showCancelButton: true,
      cancelButtonText: 'No'
    }).then((result) => {
      if (!result.isConfirmed) {
        this.guardarResultados();
      }
    });
    this.worldRandom = '';
    this.worldSelected=[];
    this.codedWorld='';    
    this.countLetter = 0;
    this.loadGame();
  }

  guardarResultados(){
    let date = new Date();
    let dateString = date.toString();
    this.resultGame = {
      uid: this.usuario.uid,
      mail: this.usuario.email,
      fecha: dateString,
      juego: 'Ahorcado',
      aciertos: this.successes,
      intentos: this.times
    }
    this.resServ.guardarResultado(this.resultGame);
  }
  
}
