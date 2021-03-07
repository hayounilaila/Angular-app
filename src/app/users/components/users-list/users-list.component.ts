import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  @Input() users;
  @Input() pages;
  @Input() page;
  @Output() loadPage: EventEmitter<number> = new EventEmitter();
  @Output() deleteUser: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  handlePageChange(page: number) {
    this.loadPage.emit(page);
  }
  handleDeleteUser(id: number) {
    this.deleteUser.emit(id);
  }
}
