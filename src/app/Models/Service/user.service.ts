import { Injectable } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from '../Class/student';
import { User } from '../Class/user';

@Injectable()
export class UserService {

  studentDB: StudentService = new StudentService();
  studentsList: Student[] = this.studentDB.getStudents();

  login(user: User): boolean {
    for (let i = 0; i < this.studentsList.length; i++) {
      if (this.studentsList[i].email == user.email && this.studentsList[i].password == user.password) {     
          this.updateLocalStorage(this.studentsList[i]);
        return true;
      }
    }
    return false;
  }

  updateLocalStorage(student: Student) {
    localStorage.setItem('email', student.email);
    localStorage.setItem('password', student.password);
    localStorage.setItem('name', student.name);
    localStorage.setItem('id', student.studentId.toString());
  }

  isLogin() {
    return (localStorage.getItem('name') != null)
  }

  logOut() {
    localStorage.clear();
  }
}
