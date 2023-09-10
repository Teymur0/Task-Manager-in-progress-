import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task.model';
import { TasksService } from '../tasks-service.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task: Task;
  @Input() index: number;
}
