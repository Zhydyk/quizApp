import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, QuizRoutingModule, MatButtonModule, MatIconModule],
  declarations: [QuizComponent],
  exports: [QuizComponent],
})
export class QuizModule {}
