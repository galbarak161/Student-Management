import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Student } from "../../Models/Class/student";
import { User } from "../../Models/Class/user";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  @Input('students') students: Student[] = [];
  @Output('studentSelected') student = new EventEmitter<Student>();

  studentSelected(student: Student): void {
    this.student.emit(student);
  }
}

