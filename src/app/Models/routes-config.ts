import { Routes } from "@angular/router";
import { StudentRootComponent } from "../students/student-root/student-root.component";
import { HomeComponent } from "../Home/home-root/home.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { TeacherRootComponent } from "../Teachers/teacher-root/teacher-root.component";

export class RoutesConfig {
    static routes: Routes = [
        { path: '',   redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'students', component: StudentRootComponent },
        { path: 'teachers', component: TeacherRootComponent },
        { path: '**', component: PageNotFoundComponent }
    ];
}
