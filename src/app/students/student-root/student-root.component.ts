import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Student } from "../../Models/Class/student";
import { StudentService } from "../../Models/Service/student.service";

@Component({
  selector: 'app-student-root',
  templateUrl: './student-root.component.html',
  styleUrls: ['./student-root.component.css']
})


export class StudentRootComponent {
  studentId=localStorage.getItem('id') || sessionStorage.getItem('id');
  //students: Student[] = [];
  student: Student;

  hideEdit: boolean = false;
  hideChat: boolean = false;

  constructor(private service: StudentService) {
    this.service = new StudentService();
    //this.students = this.service.getStudents();
    this.student = this.service.getStudentById(parseInt(this.studentId));
  }

  toggleEdit(){
    this.hideChat = false;
    this.hideEdit = !this.hideEdit;
  }

  toggleChat(){
    this.hideEdit = false;
    this.hideChat = !this.hideChat;
  }

  editStudent(student: Student): void {
    this.service.editStudent(student);
  }

  /*
  studentSelected(student: Student): void {
    this.student = student;
    this.hideReg = true;
    this.hideDetails = false;
  }

  */


  /*
  removeStudent(student: Student): void {
    this.students.splice(this.students.indexOf(student), 1);
    this.hideDetails = true;
  }

  toggleRegForm(): void {
    this.hideDetails = true;
    this.hideReg = false;
  }
  */
}
