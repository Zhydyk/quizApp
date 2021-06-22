import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../guards";
import { NewQuizComponent } from "../new-quiz/new-quiz.component";
import { QuizComponent } from "./quiz.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: QuizComponent
      },
      {
        path: 'edit',
        canLoad:[AuthGuard],
        loadChildren: () => import('../new-quiz/new-quiz.module').then(module => module.NewQuizModule)
      },
      {
        path: 'edit/:id',
        component: NewQuizComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class QuizRoutingModule {}