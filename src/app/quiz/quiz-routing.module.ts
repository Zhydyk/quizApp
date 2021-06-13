import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../guards";
import { QuizComponent } from "./quiz.component";

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: QuizComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class QuizRoutingModule {}