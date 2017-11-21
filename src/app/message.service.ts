import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages: String[] = [];

  constructor() { }

  addToLog(message: String) {
    this.messages.push(message);
  }

  clearCache() {
    this.messages = [];
  }

}
