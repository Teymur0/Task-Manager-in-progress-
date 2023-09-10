import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Task } from '../tasks/task.model';
import { Observable } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { TasksService } from '../tasks/tasks-service.service';

@Injectable({ providedIn: 'root' })
export class CompletedTasksResolver implements Resolve<Task[]> {
  constructor(private dataStorageServie: DataStorageService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Task[] | Observable<Task[]> | Promise<Task[]> {
    return this.dataStorageServie.fetchCompletedTasks();
  }
}
