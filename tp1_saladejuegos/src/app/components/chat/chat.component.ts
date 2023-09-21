import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  message:string = "";
  messages: any = [
    {
      user: "Obi-Wan",
      text: "Hello there!"
    }
  ]
  sendMessage(){
    console.log("sendMessage");
    this.message = "";
  }
}
