import { Injectable } from '@angular/core';
import { Student } from '../Class/student';
import { User, userTypeEnum } from '../Class/user';
import { UserService } from './user.service';

@Injectable()
export class StudentService {


  students: Student[] = [
    new Student('Moshe', 'Computers', 72, new Date('1990-03-28'), new User("gal2@gal.com", "1234", false)),
    new Student('Lutvak', 'Agriculture', 92, new Date('1997-05-27'), new User("gal3@gal.com", "1234", false)),
    new Student('Shachar', 'Math', 83, new Date('1995-03-28'), new User("gal1@gal.com", "1234", false)),
    new Student('Gal', 'Computers', 100, new Date('1992-09-30'), new User("gal6@gal.gal", "1234", true)),
    new Student('dan', 'Computers', 100, new Date('1992-09-30'), new User("gal7@gal.gal", "1234", true)),
    new Student('din', 'Computers', 100, new Date('1992-09-30'), new User("gal8@gal.gal", "1234", true)),
    new Student('don', 'Computers', 100, new Date('1992-09-30'), new User("g8@gal.gal", "1234", true)),
    new Student('der', 'Computers', 100, new Date('1992-09-30'), new User("gfd8@gal.gal", "1234", true)),
    new Student('dyu', 'Computers', 100, new Date('1992-09-30'), new User("gsd8@gal.gal", "1234", true)),
  ];

  studentArr = this.getStudents();
  getStudents(): Student[] {
    return Student.addIdToStudentArr(this.students);
  }

  getNumbersOfStudents(num: number): Student[]{
    let sArr: Student[] = [];
    for(let i=0;i<num;i++){
      sArr.push(this.studentArr[i]);
    }
    return sArr;
  }

  getStudentIdByName(studentName: string): number {
    let s: Student = this.studentArr.find(s => s.name == studentName);
    return s.studentId
  }
  getStudentById(studentid: number): Student {
    let s: Student = this.studentArr.find(s => s.studentId == studentid);
    return s;
  }
  addStudent(newStudent: Student) {
    this.students.push(newStudent);
  }
  editStudent(editedStudent: Student) {
    let s: Student = this.studentArr.find(s => s.studentId == editedStudent.studentId);
    s.clone(editedStudent);
    localStorage.setItem('email', s.email);
    localStorage.setItem('password', s.password);
    localStorage.setItem('name', s.name);
    localStorage.setItem('id', s.studentId.toString());
  }
  constructor() { }

}


