import {NgModule} from "@angular/core";
import {AuthComponent} from "./auth.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../services/auth.service";

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [AuthComponent],
  exports: [AuthComponent],
  providers: [AuthService]
})

export class AuthModule {
}
