import { Component, inject } from '@angular/core';
import {
 FormBuilder,
 FormGroup,
 ReactiveFormsModule,
 Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserRegisterDto } from '../../../models/users.model';
import { StateService } from '../../../services/state/state.service';
import { UsersService } from '../../../services/users/users.service';

@Component({
 selector: 'app-register',
 standalone: true,
 imports: [ReactiveFormsModule, RouterModule],
 template: `
  <div>
   <h2>register</h2>
   <form [formGroup]="formRegister" (ngSubmit)="onSubmit()">
    <input
     type="text"
     id="username"
     placeholder="username"
     formControlName="username"
    />
    <input
     type="email"
     id="email"
     placeholder="email"
     formControlName="email"
    />
    <input
     type="password"
     id="password"
     placeholder="password"
     formControlName="password"
    />
    <input
     type="text"
     id="country"
     placeholder="country"
     formControlName="country"
    />
    <button type="submit" [disabled]="formRegister.invalid">go!</button>
   </form>
  </div>
  <p role="none" (click)="onClickLogin()">already have an account? login</p>
 `,
 styleUrl: './register.component.css',
})
export default class RegisterComponent {
 repo = inject(UsersService);
 state = inject(StateService);
 fb = inject(FormBuilder);
 router = inject(Router);
 formRegister: FormGroup;

 constructor() {
  this.formRegister = this.fb.group({
   username: ['', Validators.required],
   email: ['', [Validators.email, Validators.required]],
   password: ['', Validators.required],
   country: [''],
  });
 }

 onSubmit() {
  const newUser: UserRegisterDto = {
   username: this.formRegister.value.username.toLowerCase(),
   email: this.formRegister.value.email,
   password: this.formRegister.value.password,
   country: this.formRegister.value.country,
  };

  this.repo.register(newUser).subscribe(() => {
   this.state.setLoginForm();
  });
 }

 onClickLogin() {
  return this.state.setLoginForm();
 }
}
