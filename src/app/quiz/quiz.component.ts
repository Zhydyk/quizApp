import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor(public authServise: AuthService) { }

  ngOnInit(): void {
  }

  public onSignOut() {
    this.authServise.signOut();
  }

}
