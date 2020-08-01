import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { UserService } from "./Models/Service/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  isLogin: boolean;
  constructor(private router: Router, private userService: UserService) {
    this.userService = new UserService();
  }

  checkLogin() {
    return (this.isLogin = this.userService.isLogin());
  }

  logOut(){
    this.userService.logOut();
    this.router.navigate(['home']);
  }  
}

