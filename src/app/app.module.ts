import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { TaskItemComponent } from './tasks/task-item/task-item.component';
import { TaskDetailsComponent } from './tasks/task-details/task-details.component';
import { TaskEditComponent } from './tasks/task-edit/task-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompletedTaskDetailsComponent } from './completed-tasks/completed-task-details/completed-task-details.component';
import { CompletedTaskItemComponent } from './completed-tasks/completed-task-item/completed-task-item.component';
import { CompletedTasksListComponent } from './completed-tasks/completed-tasks-list/completed-tasks-list.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { TasksStartComponent } from './tasks/tasks-start/tasks-start.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoadingSpinnerComponent } from './shared/laoding-spinner/loading-spinner.component';
import { AuthenticationInterceptorService } from './authentication/authentication-interceptor.service';
import { AlertComponent } from './shared/alert/alert.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompletedTasksComponent,
    TasksComponent,
    TasksListComponent,
    TaskItemComponent,
    TaskDetailsComponent,
    TaskEditComponent,
    CompletedTaskDetailsComponent,
    CompletedTaskItemComponent,
    CompletedTasksListComponent,
    DropdownDirective,
    TasksStartComponent,
    AuthenticationComponent,
    LoadingSpinnerComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
