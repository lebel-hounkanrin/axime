import { LoginComponent } from './auth/components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RegistrationComponent } from './auth/components/registration/registration.component';

const routes: Routes = [
  {path: "", pathMatch:"full", component: MainComponent},
  {path: "signin", component: LoginComponent},
  {path: "signup", component: RegistrationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
