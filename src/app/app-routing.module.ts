import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { TaskDetailsComponent } from './tasks/task-details/task-details.component';
import { CompletedTaskDetailsComponent } from './completed-tasks/completed-task-details/completed-task-details.component';
import { TaskEditComponent } from './tasks/task-edit/task-edit.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationGuard } from './authentication/authentication.guard';

const appRoutes: Routes = [
  // { path: '**', redirectTo: '/authentication', pathMatch: 'full' },
  { path: '', component: AuthenticationComponent },
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [AuthenticationGuard],
    children: [
      { path: 'new', component: TaskEditComponent },
      {
        path: ':id',
        component: TaskDetailsComponent,
      },
      {
        path: ':id/edit',
        component: TaskEditComponent,
      },
    ],
  },

  {
    path: 'completed-tasks',
    component: CompletedTasksComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: ':id',
        component: CompletedTaskDetailsComponent,
      },
    ],
  },
  { path: 'authentication', component: AuthenticationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
