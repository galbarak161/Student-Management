import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Student } from '../../Models/Class/student';
import { Message } from "../../Models/Class/message";
import { StudentService } from "../../Models/Service/student.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MessegeService } from "../../Models/Service/messege.service";

@Component({
  selector: 'app-teacher-root',
  templateUrl: './teacher-root.component.html',
  styleUrls: ['./teacher-root.component.css']
})
export class TeacherRootComponent {
  @Output('messege') messege = new EventEmitter<Message>();

  students: Student[];
  message: Message[];


  // Cards Project
  studentsList: Student[];
  numberOfStudnets: number;
  selected: boolean;
  isDisabled: boolean;
  // Cards Project


  messageForm: FormGroup;
  studentId: FormControl;
  chat: FormControl;
  messageToSend: FormControl;

  initFormControls() {
    this.studentId = new FormControl('', [Validators.required]);
    this.chat = new FormControl({ value: '', disabled: true });
    this.messageToSend = new FormControl('', [Validators.required, Validators.maxLength(50)]);
  }
  constructor(private messageService: MessegeService, private studentService: StudentService) {
    messageService = new MessegeService();
    studentService = new StudentService();
    this.students = this.studentService.getStudents();


    // Cards Project
    this.numberOfStudnets = 3;
    this.studentsList = this.studentService.getNumbersOfStudents(this.numberOfStudnets);
    this.selected = false;
    if (this.numberOfStudnets <= this.students.length - 3)
      this.isDisabled = false;
    else
      this.isDisabled = true;
    // Cards Project

    this.initFormControls();
    this.messageForm = new FormGroup({
      studentId: this.studentId,
      messageToSend: this.messageToSend,
      chat: this.chat
    });
  }


  // Cards Project
  loadMoreStudents() {
    this.numberOfStudnets = this.numberOfStudnets + 3;
    this.studentsList = this.studentService.getNumbersOfStudents(this.numberOfStudnets);
    if (this.numberOfStudnets <= this.students.length - 3)
      this.isDisabled = false;
    else
      this.isDisabled = true;
  }
  // Cards Project


  send() {
    this.messageService.addMessege(this.messageToSend.value, this.studentId.value);
    this.showChat(this.messageService.getMessege(this.studentId.value));
    this.messageToSend.setValue("");
  }

  showChat(message: Message[]) {
    let chat = "";
    let singleMessage = "";
    for (let m of message) {
      singleMessage = `${m.text} --- sent: ${m.date.getDate()}/${m.date.getMonth() + 1}/${m.date.getFullYear()} at ${m.date.getHours()}:${m.date.getMinutes()} \n`;
      chat += singleMessage;
    }
    this.chat.setValue(chat);
  }

  studentSelected() {
    this.showChat(this.messageService.getMessege(this.studentId.value));
  }

  studentSelected1(student: Student) {
    this.showChat(this.messageService.getMessege(student.studentId));
  }
}
