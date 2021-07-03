import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

//Libs for firebase
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environment';

2

//Modules from app
import {AuthModule} from "./auth/auth.module";
import {QuizModule} from "./quiz/quiz.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewQuizModule } from './new-quiz/new-quiz.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AuthModule,
    QuizModule,
    BrowserAnimationsModule,
    NewQuizModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
