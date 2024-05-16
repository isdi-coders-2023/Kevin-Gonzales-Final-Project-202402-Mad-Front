import { Component, Input, inject } from '@angular/core';
import {
 FormBuilder,
 FormGroup,
 ReactiveFormsModule,
 Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../../services/users/users.service';
import MyProfileComponent from '../my-profile.component';
import { User } from '../../../models/users.model';
import { StateService } from '../../../services/state/state.service';
import { JsonPipe } from '@angular/common';

@Component({
 selector: 'app-myprofile-delete',
 standalone: true,
 imports: [ReactiveFormsModule, JsonPipe],
 template: `
  <div id="deleteCard">
   <h2>delete profile</h2>
   <p>please, confirm writting "sudo delete" for continue</p>
   <form [formGroup]="formDelete" (ngSubmit)="onSubmit()">
    <div id="delInp">
     <input type="text" placeholder="sudo delete" formControlName="confirm1" />
     <input type="text" placeholder="sudo delete" formControlName="confirm2" />
    </div>
    <button (click)="onCancel()">❌</button>
    <button type="submit" [disabled]="formDelete.invalid">✅</button>
   </form>
  </div>
 `,
 styleUrl: './myprofile-delete.component.css',
})
export default class MyprofileDeleteComponent {
 @Input({ required: true })
 user!: User;

 state = inject(StateService);
 main = inject(MyProfileComponent);
 activatedRoute = inject(ActivatedRoute);
 repo = inject(UsersService);
 formDelete: FormGroup;
 router = inject(Router);

 constructor(private fb: FormBuilder) {
  this.formDelete = this.fb.group(
   {
    confirm1: ['', Validators.required],
    confirm2: ['', Validators.required],
   },
   { asyncValidators: this.isSudoDelete }
  );
 }

 async isSudoDelete(
  formDelete: FormGroup
 ): Promise<{ [key: string]: boolean } | null> {
  if (formDelete.get('confirm1')?.value === 'sudo delete') {
   return null;
  }
  return { isNotSudoDelete: true };
 }

 onSubmit() {
  const id = this.user.id;
  this.repo.delete(id).subscribe(() => {
   this.state.setLoginState('idle');
   this.router.navigate(['home']);
  });
 }

 onCancel() {
  this.main.funcOption = 'view';
 }
}
