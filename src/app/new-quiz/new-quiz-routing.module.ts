import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewQuizComponent } from "../new-quiz/new-quiz.component";

const routes: Routes = [
  {
    path: '',
    component: NewQuizComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NewQuizRoutingModule {}