import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Message } from "../Models/Class/message";
import { Student } from "../Models/Class/student";
import { MessegeService } from "../Models/Service/messege.service";
import { StudentService } from "../Models/Service/student.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  @Input('student') data: Student;
  @Output('messege') messege = new EventEmitter<Message>();
  
  userMessage: Message[];

  messageForm: FormGroup;
  chat: FormControl;
  messageToSend: FormControl;

  initFormControls() {
    this.chat = new FormControl({ value: '', disabled: true });
    this.messageToSend = new FormControl('', [Validators.required, Validators.maxLength(50)]);
  }
  constructor(private messageService: MessegeService, private studentService: StudentService) {
    messageService = new MessegeService();
    studentService = new StudentService();
  }

  ngOnInit() {
    this.initFormControls();
    this.messageForm = new FormGroup({
      messageToSend: this.messageToSend,
      chat: this.chat
    });
    this.userMessage = this.messageService.getMessege(this.data.studentId);
  }
  /*
  send() {
    this.messageService.addMessege(this.messageToSend.value, this.studentId.value);
    this.showChat(this.messageService.getMessege(this.studentId.value));
    this.messageToSend.setValue("");
  }

  showChat(message: Message[]) {
    let chat = "";
    let singleMessage = "";
    for (let m of message) {
      singleMessage = `${m.text} ---> sent: ${m.date.getDate()}/${m.date.getMonth() + 1}/${m.date.getFullYear()} at ${m.date.getHours()}:${m.date.getMinutes()} \n`;
      chat += singleMessage;
    }
    this.chat.setValue(chat);
  }

  studentSelected(){
    this.showChat(this.messageService.getMessege(this.studentId.value));
  }

  studentSelected1(student: Student){
    this.showChat(this.messageService.getMessege(student.studentId));
  }
  */
}
