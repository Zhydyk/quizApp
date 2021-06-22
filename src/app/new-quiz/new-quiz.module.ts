import { NgModule } from '@angular/core';
import { NewQuizRoutingModule } from './new-quiz-routing.module';
import { NewQuizComponent } from './new-quiz.component';

@NgModule({
  imports: [NewQuizRoutingModule],
  declarations: [NewQuizComponent],
  exports: [NewQuizComponent],
})
export class NewQuizModule {}
