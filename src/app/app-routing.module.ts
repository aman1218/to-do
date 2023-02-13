import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailComponent } from './app-pages/task-detail/task-detail.component';
import { TasksComponent } from './app-pages/tasks/tasks.component';

const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: 'task-details', component: TaskDetailComponent },
  { path: '',   redirectTo: 'tasks', pathMatch: 'full' },
  { path: '**', component: TasksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
