import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/tasks/task.model';
import { TasksService } from 'src/app/tasks/tasks-service.service';

@Component({
  selector: 'app-completed-task-details',
  templateUrl: './completed-task-details.component.html',
  styleUrls: ['./completed-task-details.component.css'],
})
export class CompletedTaskDetailsComponent implements OnInit {
  completedTask: Task;
  id: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TasksService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.completedTask = this.taskService.getCompletedTask(this.id);
    });
  }

  onDelete() {
    this.taskService.deleteCompletedTask(this.id);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  onActivate() {
    this.taskService.activateTask(this.completedTask, this.id);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
