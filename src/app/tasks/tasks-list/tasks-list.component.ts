import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../task.model';
import { TasksService } from '../tasks-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent implements OnInit {
  tasks: Task[];

  constructor(
    private tasksService: TasksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.tasksService.tasksChanged.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
    this.tasks = this.tasksService.getTasks();
  }
  onNewTask() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
