import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; //Angular bootstrap
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  //Two Way Binding and Forms
import { Routes, RouterModule } from '@angular/router'; // Angular Route
import { RoutesConfig } from './Models/routes-config'; // Route Class

import { StudentService } from './Models/Service/student.service'; //Service
import { MessegeService } from './Models/Service/messege.service';
import { UserService } from './Models/Service/user.service';

import { AppComponent } from './app.component';

import { StudentRootComponent } from './students/student-root/student-root.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { StudentAddComponent } from './students/student-add/student-add.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { StudentDetailsUpdateComponent } from './students/student-details-update/student-details-update.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeacherRootComponent } from './Teachers/teacher-root/teacher-root.component';
import { LoginComponent } from './Home/login/login.component';
import { RegisterComponent } from './Home/register/register.component';
import { HomeComponent } from './Home/home-root/home.component';
import { ChatComponent } from './Chat/chat.component';
import { FilterPipe } from './Models/FilterPipe';

@NgModule({
  declarations: [
    AppComponent, //project Component
    StudentRootComponent, //Student-main-root
    StudentListComponent,
    StudentAddComponent,
    StudentDetailsComponent,
    StudentDetailsUpdateComponent,
    HomeComponent,
    PageNotFoundComponent,
    TeacherRootComponent,
    LoginComponent,
    RegisterComponent,
    ChatComponent,
    FilterPipe,
  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule, //Forms
    FormsModule,  //Two Way Binding
    NgbModule.forRoot(), //Angular bootstrap
    RouterModule.forRoot(RoutesConfig.routes, { useHash: true }), // Router
  ],
  
  providers: [StudentService, UserService, MessegeService], //Service
  bootstrap: [AppComponent] //Root-Module-Component
})
export class AppModule { }
