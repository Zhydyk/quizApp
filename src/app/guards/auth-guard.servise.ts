import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { take, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(public authServise: AuthService, public authFire: AngularFireAuth, public router: Router) {}
  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.performCheck();
  }

  public canLoad(): Observable<boolean> {
    return this.performCheck();
  }

  private performCheck(): Observable<boolean> {
    return this.authFire.user.pipe(map((user) => {
      if (user) {
        console.log(user)
        // user is logged in
        return true;
      }
      console.log('false')
      // user is not logged in
      this.router.navigate(['/login']);
      return false;
    }), 
    take(1));
  }
}
