import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private url: string = 'https://api.thecatapi.com/v1/images/search'

  constructor(private http: HttpClient) { }

  getChat() {

    // observable

    let obs: Observable<any>;
    obs = this.http.get(this.url);

    return obs;
  }
}
