import { EventEmitter, Injectable } from '@angular/core';
import { Task } from '../tasks/task.model';
import { Subject } from 'rxjs';
import { TasksService } from '../tasks/tasks-service.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class CompletedTasksService {
//   completedTasksChanged = new Subject<Task[]>();
//   completedTasks: Task[] = [
//     new Task('Completed', 'completed description'),
//     new Task('Completed2', 'completed description2'),
//   ];

//   getCompletedTasks() {
//     return this.completedTasks.slice();
//   }
//   getCompletedTask(index: number) {
//     return this.completedTasks[index];
//   }
//   addFinishedTask(finishedTask: Task) {
//     this.completedTasks.push(finishedTask);
//     this.completedTasksChanged.next(this.completedTasks);
//   }

//   deleteCompletedTask(index: number) {
//     this.completedTasks.splice(index, 1);
//     this.completedTasksChanged.next(this.completedTasks);
//   }
// }
