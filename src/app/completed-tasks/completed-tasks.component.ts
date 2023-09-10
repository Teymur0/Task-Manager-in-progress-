import { Component, OnInit } from '@angular/core';
import { Task } from '../tasks/task.model';


@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css'],
})
export class CompletedTasksComponent implements OnInit {
  selectedCompletedTask: Task;
  constructor() {}

  ngOnInit(): void {
   
  }
}
