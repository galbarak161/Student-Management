import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Student } from "../../Models/Class/student";
import { User } from "../../Models/Class/user";

@Component({
    selector: 'app-student-details',
    templateUrl: './student-details.component.html',
    styleUrls: ['./student-details.component.css']
})

export class StudentDetailsComponent {
    @Input('student') data: Student;
    @Output('toggleChat') toggleChat: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output('toggleEdit') toggleEdit: EventEmitter<boolean> = new EventEmitter<boolean>();
  
   // @Output('remove') removing: EventEmitter<Student> = new EventEmitter<Student>();
   // @Output('edit') editing: EventEmitter<Student> = new EventEmitter<Student>();


    hideEdit: boolean = true;
    hideChat: boolean = true;
    toggleE(): void {
        this.hideEdit = !this.hideEdit;
        this.toggleEdit.emit(this.hideEdit);
    }
    toggleC(): void{
        this.hideChat = !this.hideChat;
        this.toggleChat.emit(this.hideChat);
    }
    /*
    remove(): void {
        this.removing.emit(this.data);
    }
    */
}
