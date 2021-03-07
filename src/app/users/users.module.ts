import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//containers
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  declarations: [DashboardComponent, UsersListComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [DashboardComponent],
})
export class UsersModule {}
