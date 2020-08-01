import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Student } from "../../Models/Class/student";
import { User } from "../../Models/Class/user";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-student-details-update',
  templateUrl: './student-details-update.component.html',
  styleUrls: ['./student-details-update.component.css']
})
export class StudentDetailsUpdateComponent implements OnInit {
  @Input('student') data: Student;
  @Output('edit') editing: EventEmitter<Student> = new EventEmitter<Student>();

  /*  -------------Form Inputs------------- */
  updateForm: FormGroup;
  email: FormControl;
  password: FormControl;
  name: FormControl;
  course: FormControl;
  grade: FormControl;
  birthday: FormControl;
  picSrc: FormControl;
  emailExp: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  initFormControls() {
    this.email = new FormControl(this.data.email, [Validators.required ,Validators.pattern(this.emailExp)]);
    this.password = new FormControl(this.data.password, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]);
    this.name = new FormControl(this.data.name, [Validators.required, Validators.minLength(2), Validators.maxLength(7)]);
    this.course = new FormControl(this.data.course, [Validators.required, Validators.minLength(2)]);
    this.grade = new FormControl(this.data.grade, [Validators.required, Validators.min(0), Validators.max(100)]);
    this.birthday = new FormControl(this.data.birthday, [Validators.required]);
    this.picSrc = new FormControl(this.data.picSrc, [Validators.required]);
  }

  constructor() { }

  //OnInit  will be called after the component is ready,
  ngOnInit() {
    this.initFormControls();
    this.updateForm = new FormGroup({
      email: this.email,
      password: this.password,
      name: this.name,
      course: this.course,
      grade: this.grade,
      birthday: this.birthday,
      picSrc: this.picSrc
    });
  }

  edit() {
    if(this.email.errors||this.password.errors||this.name.errors||this.birthday.errors||this.course.errors||this.grade.errors){
      alert("invalid input");
      return;
    }
    else{
      this.data.email=this.email.value;
      this.data.password=this.password.value;
      this.data.name=this.name.value;
      this.data.birthday=this.birthday.value;
      this.data.course=this.course.value;
      this.data.grade=this.grade.value;
    }
    alert("Details updated");    
    this.editing.emit(this.data);
  }
}


