import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Task } from '../tasks/task.model';
import { TasksService } from '../tasks/tasks-service.service';
import { exhaustMap, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root', 
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private tasksService: TasksService,
    // private authenticationService: AuthenticationService
  ) {}

  storeTasks() {
    const tasks = this.tasksService.getTasks();
    this.http
      .put(
        'https://task-manager-1d30e-default-rtdb.firebaseio.com/tasks.json',
        tasks
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
  storeCompletedTasks() {
    const completedTasks = this.tasksService.getCompletedTasks();
    this.http
      .put(
        'https://task-manager-1d30e-default-rtdb.firebaseio.com/completed-tasks.json',
        completedTasks
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchTasks() {
    return this.http
      .get<Task[]>(
        'https://task-manager-1d30e-default-rtdb.firebaseio.com/tasks.json'
      )
      .pipe(
        tap((tasks) => {
          this.tasksService.setTasks(tasks);
        })
      );
  }

  fetchCompletedTasks() {
    return this.http
      .get<Task[]>(
        'https://task-manager-1d30e-default-rtdb.firebaseio.com/completed-tasks.json'
      )
      .pipe(
        tap((completedTasks) => {
          this.tasksService.setCompletedTasks(completedTasks);
        })
      );
  }
}
