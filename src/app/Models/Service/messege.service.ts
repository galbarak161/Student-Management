import { Injectable } from '@angular/core';
import { Message } from '../Class/message';

@Injectable()
export class MessegeService {

  messageArr: Message[] = [
    new Message("hi man", 0, true),
    new Message("who is it?", 0, false),
    new Message("hi there 1", 1, true),
    new Message("hi there 2", 2, true),
    new Message("hi there 3", 3, true),
  ];

  getMessege(studentId: number): Message[] {
    let studentChat: Message[] = [];
    for (let m of this.messageArr) {
      if (m.studentId == studentId)
        studentChat.push(m);
    }
    return studentChat;
  }

  addMessege(text: string, studentId: number, sentFromUniversity?: boolean): void {
    this.messageArr.push(new Message(text, studentId, sentFromUniversity || true));
  }

  constructor() { }

}
