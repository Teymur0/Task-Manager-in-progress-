import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/tasks/task.model';


@Component({
  selector: 'app-completed-task-item',
  templateUrl: './completed-task-item.component.html',
  styleUrls: ['./completed-task-item.component.css'],
})
export class CompletedTaskItemComponent {
  @Input() completedTask: Task;
  @Input() index: number;
}
