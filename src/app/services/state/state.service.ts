import { Injectable, inject } from '@angular/core';
import { Club } from '../../models/clubs.model';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsersService } from '../users/users.service';
import { User } from '../../models/users.model';

type LoginState = 'idle' | 'register' | 'logged' | 'error';

export type Payload = {
 id: string;
 role: string;
} & JwtPayload;

export type State = {
 loginState: LoginState;
 token: string | null;
 currenPayload: Payload | null;
 currenUser: User | null;
 clubs: Club[];
 users: User[];
};

const initialState: State = {
 loginState: 'idle',
 token: null,
 currenPayload: null,
 currenUser: null,
 clubs: [],
 users: [],
};

@Injectable({
 providedIn: 'root',
})
export class StateService {
 public state$ = new BehaviorSubject<State>(initialState);
 private userService = inject(UsersService);
 jwtDecode = jwtDecode;

 getState(): Observable<State> {
  return this.state$.asObservable();
 }

 get state(): State {
  return this.state$.value;
 }

 setLoginState(loginState: LoginState) {
  this.state$.next({ ...this.state$.value, loginState });
 }

 setRegisterForm() {
  this.state$.next({
   ...this.state$.value,
   loginState: 'register',
   token: null,
   currenPayload: null,
  });
 }

 setLoginForm() {
  this.state$.next({
   ...this.state$.value,
   loginState: 'idle',
   token: null,
   currenPayload: null,
  });
 }

 setLogin(token: string) {
  const currenPayload = this.jwtDecode(token) as Payload;
  localStorage.setItem('currentT', JSON.stringify({ token }));
  this.userService.getById(currenPayload.id).subscribe((user) => {
   this.state$.next({
    ...this.state$.value,
    loginState: 'logged',
    token,
    currenPayload,
    currenUser: user,
   });
  });
 }

 setLogout() {
  localStorage.removeItem('currentT');
  this.state$.next({
   ...this.state$.value,
   loginState: 'idle',
   token: null,
   currenPayload: null,
  });
 }

 getUsers() {
  this.userService.getAll().subscribe((users) => {
   this.state$.next({ ...this.state$.value, users });
  });
 }

 getUser(id: string) {
  return this.state.users.find((user) => user.id === id);
 }
}
