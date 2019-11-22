import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from "../services/chat.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  public chat: string;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.getChat();
  }

  // stop le subscribe au changement de page
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


  getChat() {

    // effectue un subscribe

    this.subscription = this.chatService.getChat().subscribe(
      resp => {
        console.log(resp);
        this.chat = resp[0];
      }
    )
  }

}
