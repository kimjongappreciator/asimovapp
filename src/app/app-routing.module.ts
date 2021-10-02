import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from "@angular/router";
import {TeacherDashboardComponent} from "./teacher-dashboard/teacher-dashboard.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: 'teacher-dashboard', component: TeacherDashboardComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo:'/home', pathMatch: 'full'}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
