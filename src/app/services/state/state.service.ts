import { Injectable, inject } from '@angular/core';
import { Club } from '../../models/clubs.model';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { ClubsService } from '../clubs/clubs.service';
import { UsersService } from '../users/users.service';

type LoginState = 'idle' | 'register' | 'logged' | 'error';

export type Payload = {
 id: string;
 role: string;
} & JwtPayload;

export type State = {
 loginState: LoginState;
 token: string | null;
 currenPayload: Payload | null;
 currenUser: unknown | null;
 clubs: Club[];
};

const initialState: State = {
 loginState: 'idle',
 token: null,
 currenPayload: null,
 currenUser: null,
 clubs: [],
};

@Injectable({
 providedIn: 'root',
})
export class StateService {
 public state$ = new BehaviorSubject<State>(initialState);
 private clubsService = inject(ClubsService);
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
  localStorage.setItem('Y dale U', JSON.stringify({ token }));
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
  localStorage.removeItem('Y dale U');
  this.state$.next({
   ...this.state$.value,
   loginState: 'idle',
   token: null,
   currenPayload: null,
  });
 }
}
