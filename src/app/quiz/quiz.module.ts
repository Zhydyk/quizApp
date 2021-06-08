import {NgModule} from "@angular/core";
import { QuizRoutingModule } from "./quiz-routing.module";
import {QuizComponent} from "./quiz.component";

@NgModule({
  imports: [QuizRoutingModule],
  declarations: [QuizComponent],
  exports: [QuizComponent],
})

export class QuizModule {
}