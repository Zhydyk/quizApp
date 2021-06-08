import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public authGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private fb: FormBuilder, private authServise: AuthService) {
  }

  ngOnInit(): void {
    this.buildForm()
  }

  public onSignUp() {
    if (this.authGroup.valid) {
      console.log(this.authGroup.value.userName);
      console.log(this.authGroup.value.password);
      this.authServise.signUp(
        this.authGroup.value.userName,
        this.authGroup.value.password
      )
    }
  }

  public onSignIn() {
    if(this.authGroup.valid) {
      this.authServise.signIn(
        this.authGroup.value.userName,
        this.authGroup.value.password
      )
    }
  }

  public onSignOut() {
    this.authServise.signOut();
  }

  public buildForm(): void {
    this.authGroup = this.fb.group({
      userName: [
        '',
        {
          validators: [Validators.required]
        }
      ],
      password: [
        '',
        {
          validators: [Validators.required, Validators.minLength(4)]
        }
      ]
    })
  }

}
