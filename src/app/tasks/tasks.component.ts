import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';
import { TasksService } from './tasks-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {


  constructor() {}

  ngOnInit(): void {}
}
