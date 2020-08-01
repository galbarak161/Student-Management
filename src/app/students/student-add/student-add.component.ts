import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Student } from "../../Models/Class/student";
import { User, userTypeEnum } from "../../Models/Class/user";

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {
  /*
userType : userTypeEnum;
  student: Student = new Student('name', 'course', 0, new Date(), new User('email', 'password',this.userType[0],false));
  @Output('newStudent') newStudent: EventEmitter<Student> = new EventEmitter<Student>();

  regForm: FormGroup;
  email: FormControl;
  password: FormControl;
  name: FormControl;
  course: FormControl;
  grade: FormControl;
  birthday: FormControl;
  picSrc: FormControl;
  emailExp: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  initFormControls() {
    this.email = new FormControl('', [Validators.required, Validators.pattern(this.emailExp)]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]);
    this.name = new FormControl('', [Validators.required, Validators.minLength(2)]);
    this.course = new FormControl('', [Validators.required, Validators.minLength(2)]);
    this.grade = new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]);
    this.birthday = new FormControl('', [Validators.required]);
    this.picSrc = new FormControl('', [Validators.required]);
  }

  constructor() {
    this.initFormControls();
    this.regForm = new FormGroup({
      email: this.email,
      password: this.password,
      name: this.name,
      course: this.course,
      grade: this.grade,
      birthday: this.birthday,
      picSrc: this.picSrc
    });
  }

  receiveStudent(): void {
    if (this.email.errors || this.password.errors || this.name.errors || this.birthday.errors || this.course.errors || this.grade.errors) {
      alert("invalid input");
      return;
    }
    else {
      this.student.email = this.email.value;
      this.student.password = this.password.value;
      this.student.name = this.name.value;
      this.student.birthday = this.birthday.value;
      this.student.course = this.course.value;
      this.student.grade = this.grade.value;
    }
    this.newStudent.emit(this.student);
    //this.student = new Student('name', 'course', 0, new Date(), new User('email', 'password'));
  }
  */
}
