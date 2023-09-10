import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TasksService } from '../tasks-service.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent implements OnInit {
  task: Task;
  id: number;
  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.task = this.tasksService.getTask(this.id);
    }); 
  }
  onEditTask() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }

  finishTask() {
    this.tasksService.toCompletedTasks(this.task, this.id);
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  deleteTask() {
    this.tasksService.deteleteTask(this.id);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
