import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './Models/Service/user.service';

@Injectable()
export class CarsGuard implements CanActivate {
  
  constructor(private service: UserService, private router:Router){}

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.service.isLogin()){
      window.alert('Adoni, you are not loggedin');
      this.router.navigate(['login'], { queryParams: { goto: next.url } });
      return false;
    }
    return true;
  }
}
