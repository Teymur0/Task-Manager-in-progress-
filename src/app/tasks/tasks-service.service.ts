import { EventEmitter, Injectable } from '@angular/core';
import { Task } from './task.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasksChanged = new Subject<Task[]>();
  tasks: Task[] = [];
  completedTasksChanged = new Subject<Task[]>();
  completedTasks: Task[] = [];

  setTasks(tasks: Task[]) {
    this.tasks = tasks;
    this.tasksChanged.next(this.tasks.slice());
  }

  getTasks() {
    return this.tasks.slice();
  }
  getTask(index: number) {
    return this.tasks[index];
  }
  addTask(task: Task) {
    this.tasks.push(task);
    this.tasksChanged.next(this.tasks.slice());
  }
  updateTask(index: number, newTask: Task) {
    this.tasks[index] = newTask;
    this.tasksChanged.next(this.tasks.slice());
  }

  toCompletedTasks(task: Task, index: number) {
    this.addFinishedTask(task);
    this.deteleteTask(index);
    this.tasksChanged.next(this.tasks.slice());
  }
  deteleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.tasksChanged.next(this.tasks.slice());
  }

  //////////

  setCompletedTasks(completedTasks: Task[]) {
    this.completedTasks = completedTasks;
    this.completedTasksChanged.next(this.completedTasks.slice());
  }
  getCompletedTasks() {
    return this.completedTasks.slice();
  }
  getCompletedTask(index: number) {
    return this.completedTasks[index];
  }
  addFinishedTask(finishedTask: Task) {
    this.completedTasks.push(finishedTask);
    this.completedTasksChanged.next(this.completedTasks.slice());
  }

  deleteCompletedTask(index: number) {
    this.completedTasks.splice(index, 1);
    this.completedTasksChanged.next(this.completedTasks.slice());
  }
  activateTask(task: Task, index: number) {
    this.addTask(task);
    this.deleteCompletedTask(index);
    this.completedTasksChanged.next(this.completedTasks.slice());
  }
}
