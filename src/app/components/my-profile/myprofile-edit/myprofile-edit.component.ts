import {
 FormBuilder,
 FormGroup,
 ReactiveFormsModule,
 Validators,
} from '@angular/forms';
import { Component, inject } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';
import MyProfileComponent from '../my-profile.component';

@Component({
 selector: 'app-myprofile-edit',
 standalone: true,
 imports: [ReactiveFormsModule],
 template: `
  <h2>edit profile</h2>
  <form [formGroup]="formEdit" (ngSubmit)="onSubmit()">
   <img src="../assets/Default_Avatar.png" alt="default Image" />
   <input
    type="img"
    placeholder="update your avatar"
    formControlName="avatar"
   />
   <input type="text" placeholder="username" formControlName="username" />
   <input type="date" placeholder="birthday" formControlName="birthday" />
   <input type="text" placeholder="country" formControlName="country" />
   <input type="email" placeholder="email" formControlName="email" />
   <input type="password" placeholder="password" formControlName="password" />
   <input type="password" placeholder="confirm password" />
   <button type="submit">save</button>
  </form>
 `,
 styles: '',
})
export class MyprofileEditComponent {
 private repo = inject(UsersService);
 private main = inject(MyProfileComponent);
 private fb = inject(FormBuilder);
 formEdit: FormGroup;

 constructor() {
  this.formEdit = this.fb.group({
   avatar: [''],
   username: [''],
   birthday: [''],
   country: [''],
   email: [''],
   password: ['', Validators.required],
   confirmPassword: ['', [Validators.required, this.confirmPasswordValidator]],
  });
 }

 confirmPasswordValidator(formEdit: FormGroup) {
  if (
   formEdit.get('confirmPassword')?.value === formEdit.get('password')?.value
  ) {
   return null;
  }
  return { passwordNotMatch: true };
 }

 onSubmit() {
  // const editUser: Partial<User> = {
  //  username: this.formEdit.value.username,
  //  country: this.formEdit.value.country,
  //  email: this.formEdit.value.email,
  //  birthday: this.formEdit.value.birthday,
  // };

  this.setViewState();
 }

 setViewState() {
  this.main.setProfileState('view');
 }
}
