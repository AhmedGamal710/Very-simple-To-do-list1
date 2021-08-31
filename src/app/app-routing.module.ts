import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AddTaskComponent } from './component/add-task/add-task.component';
import { ErrComponent } from './component/err/err.component';
import { TaskComponent } from './component/task/task.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'add-task',component:AddTaskComponent},
  {path:'task/:id',component:TaskComponent},

  {path:'**', component:ErrComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
