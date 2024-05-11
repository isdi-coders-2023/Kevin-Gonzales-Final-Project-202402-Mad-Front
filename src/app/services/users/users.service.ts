import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environmentDev } from '../../../enviroments/environment.development';
import { User, UserLoginDto, UserRegisterDto } from '../../models/users.model';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root',
})
export class UsersService {
 httpClient = inject(HttpClient);
 backUrl = environmentDev.apiUrl + '/users';

 login(data: UserLoginDto) {
  console.log(data);
  return this.httpClient.post<{ token: string }>(this.backUrl + '/login', data);
 }

 getById(id: string): Observable<User> {
  return this.httpClient.get(this.backUrl + '/' + id) as Observable<User>;
 }

 register(data: UserRegisterDto) {
  const url = this.backUrl + '/register';
  console.log(url);
  console.log(data);
  return this.httpClient.post(url, data);
 }

 update(data: User) {
  return this.httpClient.patch(this.backUrl + '/' + data.id, data);
 }

 getAll(): Observable<User[]> {
  return this.httpClient.get(this.backUrl) as Observable<User[]>;
 }
}
