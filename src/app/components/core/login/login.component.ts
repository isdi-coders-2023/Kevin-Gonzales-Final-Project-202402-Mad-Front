import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginDto } from '../../../models/users.model';
import { StateService } from '../../../services/state/state.service';
import { UsersService } from '../../../services/users/users.service';

@Component({
 selector: 'app-login',
 standalone: true,
 imports: [ReactiveFormsModule],
 template: `
  <div>
   <h2>login</h2>
   <form [formGroup]="formLogin" (ngSubmit)="submit()">
    <input
     type="text"
     placeholder="username/email"
     id="username"
     formControlName="user"
    />
    <input
     type="password"
     placeholder="password"
     id="password"
     formControlName="password"
    />
    <button type="submit" [disabled]="formLogin.invalid">go!</button>
   </form>
  </div>
  <p role="none" (click)="onClickRegister()">or register</p>
 `,
 styleUrl: './login.component.css',
})
export default class LoginComponent {
 private repo = inject(UsersService);
 private state = inject(StateService);
 private fb = inject(FormBuilder);
 router = inject(Router);

 formLogin = this.fb.group({
  user: ['', Validators.required],
  password: ['', Validators.required],
 });

 submit() {
  const { user, password } = this.formLogin.value;
  const userLogin = { password } as UserLoginDto;

  if (user!.includes('@')) {
   userLogin.email = this.formLogin.value.user as string;
  } else {
   userLogin.username = this.formLogin.value.user?.toLowerCase() as string;
  }

  this.repo.login(userLogin).subscribe({
   next: ({ token }) => {
    this.state.setLogin(token);
    this.state.setLoginState('logged');
   },
   error: (err) => {
    console.log('error', err);
    this.state.setLoginState('error');
   },
  });
 }

 onClickRegister() {
  return this.state.setRegisterForm();
 }
}
