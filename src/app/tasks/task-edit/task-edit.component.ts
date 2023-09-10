import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TasksService } from '../tasks-service.service';


@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css'],
})
export class TaskEditComponent implements OnInit,OnDestroy {
  id: number;
  editMode = false;
  taskForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    // // const newTask = new Task(
    // //   this.taskForm.value['name'],
    // //   this.taskForm.value['description']
    // );
    if (this.editMode) {
      this.tasksService.updateTask(this.id, this.taskForm.value);
    } else {
      this.tasksService.addTask(this.taskForm.value);
    }
    this.taskForm.reset();
    this.onCancel();
    this.router.navigate(['tasks']);
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let taskName = '';
    let taskDescription = '';
    if (this.editMode) {
      const task = this.tasksService.getTask(this.id);
      taskName = task.name;
      taskDescription = task.description;
    }

    this.taskForm = new FormGroup({
      name: new FormControl(taskName, Validators.required),
      description: new FormControl(taskDescription, Validators.required),
    });
  }
  ngOnDestroy(): void {
    
  }
}
