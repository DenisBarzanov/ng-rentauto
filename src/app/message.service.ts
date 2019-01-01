import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];
  dataStream = new BehaviorSubject<string>(undefined);

  set message(message: string) {
    // this.messages = [...this.messages, (message)];
    this.dataStream.next(message);
    this.messages = [message, ...this.messages];
  }

  get message() {
    return this.dataStream.value;
  }
}
