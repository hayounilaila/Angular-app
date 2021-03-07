import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from '../../models/user.interface';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  public users: User[];
  public pages: number[];
  public page: number;
  public usersSubscription$: Subscription;
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers(1);
  }
  ngOnDestroy(): void {
    this.usersSubscription$.unsubscribe();
  }
  getUsers(page: number) {
    this.usersService.getUsers(page).subscribe((users) => {
      this.users = users.data;
      this.pages = [...Array(users.total_pages).keys()].map((i) => i + 1);
      this.page = users.page;
    }, this.logErrors);
  }
  deleteUser(id: number) {
    this.usersService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter((u) => u.id !== id);
    }, this.logErrors);
  }
  logErrors = (error: HttpErrorResponse) => console.error(error);
}
