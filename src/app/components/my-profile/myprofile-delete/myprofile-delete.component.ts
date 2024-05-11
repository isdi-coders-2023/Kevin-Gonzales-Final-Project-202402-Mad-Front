import { Component, inject } from '@angular/core';
import {
 FormBuilder,
 FormGroup,
 ReactiveFormsModule,
 Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
 selector: 'app-myprofile-delete',
 standalone: true,
 imports: [ReactiveFormsModule],
 template: `
  <h2>delete profile</h2>
  <p>please, confirm your password for continue</p>
  <form [formGroup]="formDelete" (ngSubmit)="onSubmit()">
   <input type="password" placeholder="password" />
   <input type="password" placeholder="confirm password" />
   <button>confirm</button>
  </form>
 `,
 styles: ``,
})
export class MyprofileDeleteComponent {
 private fb = inject(FormBuilder);
 formDelete: FormGroup;
 router = inject(Router);

 constructor() {
  this.formDelete = this.fb.group({
   password: ['', Validators.required],
   confirmPassword: ['', [Validators.required, this.confirmPasswordValidator]],
  });
 }

 confirmPasswordValidator(formDelete: FormGroup) {
  if (
   formDelete.get('confirmPassword')?.value ===
   formDelete.get('password')?.value
  ) {
   return null;
  }
  return { passwordNotMatch: true };
 }

 onSubmit() {
  this.router.navigate(['home']);
 }
}
