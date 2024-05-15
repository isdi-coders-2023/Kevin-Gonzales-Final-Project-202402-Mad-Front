import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environmentDev } from '../../../enviroments/environment.development';
import {
 User,
 UserLoginDto,
 UserRegisterDto,
 UserUpdateDto,
} from '../../models/users.model';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root',
})
export class UsersService {
 httpClient = inject(HttpClient);
 backUrl = environmentDev.apiUrl + '/users';

 getAll(): Observable<User[]> {
  return this.httpClient.get(this.backUrl) as Observable<User[]>;
 }

 getById(id: string): Observable<User> {
  const a = this.httpClient.get(this.backUrl + '/' + id) as Observable<User>;
  a.subscribe((res) => console.log(res));
  return a;
 }

 login(data: UserLoginDto) {
  console.log(data);
  const a = this.httpClient.post<{ token: string }>(
   this.backUrl + '/login',
   data
  );
  a.subscribe((res) => console.log(res));
  return a;
 }

 register(data: UserRegisterDto) {
  const url = this.backUrl + '/register';
  console.log(data);
  return this.httpClient.post(url, data);
 }

 getToken() {
  const secret = localStorage.getItem('token');
  if (!secret) {
   return null;
  }
  const token = JSON.parse(secret);
  return token;
 }

 update(id: string, data: UserUpdateDto) {
  return this.httpClient.patch(this.backUrl + '/' + id, data);
 }

 delete(id: string) {
  console.log(id);
  return this.httpClient.delete(this.backUrl + '/' + id);
 }
}
