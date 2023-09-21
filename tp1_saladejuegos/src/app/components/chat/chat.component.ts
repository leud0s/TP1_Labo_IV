import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  userIsLogged:any;
  showChat:boolean = true;
  message:string = "";
  messages: any = [
    {
      
    }
  ]
  constructor(private auth: FirebaseService){}
  ngOnInit(){
    this.auth.getUserLogged().subscribe(user =>{
      this.userIsLogged = user;
    });
  }
  sendMessage(){
    console.log("sendMessage");
    let messageNew={
      sender: this.userIsLogged.uid,
      text: this.message
    }
    this.messages.push(messageNew);

  }
  closeChat(){

  }

}
