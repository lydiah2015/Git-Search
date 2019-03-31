import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {RepositoriesComponent} from "./repositories/repositories.component";
import {NotFoundComponent} from "./not-found/not-found.component"

const routes: Routes = [

  {path:"users",component:ProfileComponent},
  {path:"repos",component:RepositoriesComponent},
  {path:"",redirectTo:"/users",pathMatch:"full"},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
