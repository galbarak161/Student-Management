import { Component} from "@angular/core";
import { Student } from "../../Models/Class/student";
import { StudentService } from "../../Models/Service/student.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  student: Student;
  userName: string;
  hideLogin = true;
  hideReg = true;

  
  constructor(private studentService: StudentService){ 
    this.userName = localStorage.getItem('name') || sessionStorage.getItem('name') || 'User';
    studentService = new StudentService();
  }

  logOut() {
    localStorage.clear();
    sessionStorage.clear();
    this.userName = 'User';
  }

  registerToggle() {
    this.hideLogin = true;
    this.hideReg = !this.hideReg;
  }
  loginToggle() {
    this.hideReg = true;
    this.hideLogin = !this.hideLogin;
  }

  addStudent(student: Student): void {
    this.studentService.addStudent(student);
    this.hideReg = true;
  }
}

