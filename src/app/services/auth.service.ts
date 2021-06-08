import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public userData: any;

  constructor(
    public angularFirestore: AngularFirestore,
    public angularFireAuth: AngularFireAuth,
    public router: Router
  ) {
    // this.angularFireAuth.authState.subscribe(user => {
    //   if (user) {
    //     this.userData = user;
    //     localStorage.setItem('user', JSON.stringify(this.userData));
    //     // JSON.parse(localStorage.getItem('user'));
    //   } else {
    //     localStorage.setItem('user', '');
    //     // JSON.parse(localStorage.getItem('user'));
    //   }
    // })

    this.userData = angularFireAuth.authState;
  }

  // get isLoggedIn(): boolean {
  //   const user = localStorage.getItem('user');
  //   return (user !== null && JSON.parse(user).emailVerified) ? true : false;
  // }

  public signUp(email: string, password: string) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password)
      .then((value: any) => {
        console.log('Success SignUp', value);
        this.router.navigate(['quiz'])
      })
      .catch((err: Error) => console.log('Something went wrong', err));
  }

  public signIn(email: string, password: string) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then((value: any) => {
        console.log('Success Login', value);
        this.router.navigate(['quiz'], {
         
        })
      })
      .catch((err: Error) => console.log('Something went wrong', err));
  }

  public signOut() {
    this.angularFireAuth.signOut();
    this.router.navigate(['login']);
    // return this.angularFireAuth.signOut().then(() => {
    //   localStorage.removeItem('user');
    //   this.router.navigate(['login']);
    // })
  }
}
