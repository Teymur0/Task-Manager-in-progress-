import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Task } from 'src/app/tasks/task.model';

import { TasksService } from 'src/app/tasks/tasks-service.service';

@Component({
  selector: 'app-completed-tasks-list',
  templateUrl: './completed-tasks-list.component.html',
  styleUrls: ['./completed-tasks-list.component.css'],
})
export class CompletedTasksListComponent implements OnInit {
  completedTasks: Task[];

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasksService.completedTasksChanged.subscribe(
      (completedTasks: Task[]) => {
        this.completedTasks = completedTasks;
      }
    );
    this.completedTasks = this.tasksService.getCompletedTasks();
  }
}
