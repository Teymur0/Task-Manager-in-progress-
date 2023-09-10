import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Task } from './task.model';
import { Observable } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { TasksService } from './tasks-service.service';

@Injectable({ providedIn: 'root' })
export class TasksResolver implements Resolve<Task[]> {
  constructor(
    private dataStorageServie: DataStorageService,
    private tasksService: TasksService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Task[] | Observable<Task[]> | Promise<Task[]> {
    const tasks = this.tasksService.getTasks();
    if (tasks.length === 0) {
      return this.dataStorageServie.fetchTasks();
    } else {
      return tasks;
    }
  }
}
