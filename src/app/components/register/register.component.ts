import { Component, inject } from '@angular/core';
import {
 FormBuilder,
 FormGroup,
 ReactiveFormsModule,
 Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { StateService } from '../../services/state/state.service';
import { UsersService } from '../../services/users/users.service';
import { UserRegisterDto } from '../../models/users.model';

@Component({
 selector: 'app-register',
 standalone: true,
 imports: [ReactiveFormsModule, RouterModule],
 template: `
  <h2>Register</h2>
  <form [formGroup]="formRegister" (ngSubmit)="onSubmit()">
   <input
    type="text"
    id="username"
    placeholder="username"
    formControlName="username"
   />
   <input type="email" id="email" placeholder="email" formControlName="email" />
   <input
    type="password"
    id="password"
    placeholder="password"
    formControlName="password"
   />
   <input type="date" id="birthday" formControlName="birthday" />
   <button type="submit" [disabled]="formRegister.invalid">Go!</button>
  </form>
  <p role="none" (click)="onLogin()">Already have an account? Login</p>
 `,
 styles: ` form{
    display: flex;
    flex-direction: column;
    background-color: #f4f4f4;
    border-radius: 20px;
    padding: 20px;
    gap: 20px;
    align-items: strech;
  }
  input{
    padding: 10px;
    border: none;
    border-radius: 20px;
    font-size: 3rem;
  }
  `,
})
export default class RegisterComponent {
 private repo = inject(UsersService);
 private state = inject(StateService);
 private fb = inject(FormBuilder);
 router = inject(Router);
 formRegister: FormGroup;

 constructor() {
  this.formRegister = this.fb.group({
   username: ['', Validators.required],
   email: ['', Validators.required],
   password: ['', Validators.required],
   birthday: [''],
  });
 }

 onSubmit() {
  const newUser: UserRegisterDto = {
   username: this.formRegister.value.username,
   email: this.formRegister.value.email,
   password: this.formRegister.value.password,
   birthday: this.formRegister.value.birthDateString,
  };

  return this.repo.register(newUser).subscribe((data) => {
   console.log(data);
   this.router.navigate(['home']);
  });
 }

 onLogin() {
  this.router.navigate(['/login']);
  this.state.setLoginForm();
 }
}
