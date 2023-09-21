import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { QuerySnapshot } from 'firebase/firestore';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/models/message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages$: Observable<QuerySnapshot<Message>>;
  userIsLogged: any;
  showChat = false;
  userName: any;
  message = '';
  messages: Message[] = [];

  constructor(private auth: FirebaseService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.userName = params['name'];
    });

    this.messages$ = this.auth.getUserLogged().pipe(
      switchMap(user => {
        this.userIsLogged = user;
        return this.auth.loadMessages();
      })
    );

    this.messages$.subscribe(
      (querySnapshot) => {
        this.messages = querySnapshot.docs.map(doc => ({
          uid: doc.data().uid,
          user: doc.data().user,
          text: doc.data().text,
          date: doc.data().date
        }));
      },
      (error) => {
        console.error('Error obteniendo documentos: ', error);
      }
    );
  }

  sendMessage(): void {
    const now = new Date();
    const messageNew: Message = {
      uid: this.userIsLogged.uid,
      user: this.userName,
      text: this.message,
      date: now.toLocaleString(),
    };

    this.auth.saveMessages(messageNew);
    this.messages.push(messageNew);
  }
  determineMessageClass(message: Message): string {
    return message.uid === this.userIsLogged.uid ? 'send' : 'received';
  }
}
