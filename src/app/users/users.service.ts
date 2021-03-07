import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL = 'https://reqres.in/api/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  public getUsers(page: number): Observable<any> {
    return this.http.get(`${URL}?page=${page}`);
  }
  public deleteUser(id: number): Observable<any> {
    return this.http.delete(`${URL}/${id}`);
  }
}
