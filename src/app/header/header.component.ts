import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { TasksService } from '../tasks/tasks-service.service';
import { AuthenticationService } from '../authentication/authentication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSubscription: Subscription;

  constructor(
    private dataStorageService: DataStorageService,
    private authenticationService: AuthenticationService
  ) {}
  ngOnInit(): void {
    this.userSubscription = this.authenticationService.user.subscribe(
      (user) => {
        //  same thing//  this.isAuthenticated = !user ? false : true;
        this.isAuthenticated = !!user;
      }
    );
  }
  onSaveData() {
    this.dataStorageService.storeTasks();
    this.dataStorageService.storeCompletedTasks();
  }
  onFetchData() {
    this.dataStorageService.fetchTasks().subscribe();
    this.dataStorageService.fetchCompletedTasks().subscribe();
  }
  onLogout() {
    this.authenticationService.logout();
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
