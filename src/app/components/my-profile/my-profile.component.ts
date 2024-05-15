import { Component, inject } from '@angular/core';
import { MyprofileViewComponent } from './myprofile-view/myprofile-view.component';
import MyprofileEditComponent from './myprofile-edit/myprofile-edit.component';
import MyprofileDeleteComponent from './myprofile-delete/myprofile-delete.component';
import { User } from '../../models/users.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateService } from '../../services/state/state.service';
import { Subscription } from 'rxjs';

@Component({
 selector: 'app-my-profile',
 standalone: true,
 template: `
  @switch (funcOption) { @case ('view') {
  <app-myprofile-view [user]="user" />
  } @case ('edit' ) {
  <app-myprofile-edit [user]="user" />
  } @case ('delete') {
  <app-myprofile-delete [user]="user" /> }}
 `,
 styles: ``,
 imports: [
  MyprofileViewComponent,
  MyprofileEditComponent,
  MyprofileDeleteComponent,
 ],
})
export default class MyProfileComponent {
 funcOption: 'view' | 'edit' | 'delete' = 'view';
 state = inject(StateService);
 fb = inject(FormBuilder);
 subscription: Subscription;
 user!: User;

 constructor() {
  this.subscription = this.state.getState().subscribe(() => {
   this.user = this.state.state.currenUser as User;
  });
 }

 setEditState() {
  this.funcOption = 'edit';
 }

 setDeleteState() {
  this.funcOption = 'delete';
 }

 confirmPasswordValidator(fb: FormGroup) {
  const password = fb.get('password')?.value;
  const confirmPassword = fb.get('confirmPassword')?.value;
  if (password === confirmPassword) {
   return null;
  }
  return { passwordNotMatch: true };
 }
}
