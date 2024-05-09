import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environmentDev } from '../../../enviroments/environment.development';
import { UserLoginDto, UserRegisterDto } from '../../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  httpClient = inject(HttpClient);
  backUrl = environmentDev.apiUrl + '/users';

  login(data: UserLoginDto) {
    console.log(data);
    return this.httpClient.post<{ token: string }>(
      this.backUrl + '/login',
      data
    );
  }

  getById(id: string) {
    return this.httpClient.get(this.backUrl + '/' + id);
  }

  register(data: UserRegisterDto) {
    const url = this.backUrl + '/register';
    console.log(url);
    console.log(data);
    return this.httpClient.post(url, data);
  }
}
