import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';
import { TasksService } from './tasks/tasks-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private tasksService: TasksService
  ) {}

  ngOnInit(): void {
    this.authenticationService.autoLogin();
  }
}
