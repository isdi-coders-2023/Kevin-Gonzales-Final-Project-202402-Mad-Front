import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, Input, inject } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';
import MyProfileComponent from '../my-profile.component';
import { ActivatedRoute } from '@angular/router';
import { User, UserUpdateDto } from '../../../models/users.model';
import { StateService } from '../../../services/state/state.service';

@Component({
 selector: 'app-myprofile-edit',
 standalone: true,
 imports: [ReactiveFormsModule],
 template: `
  <div id="editCard">
   <h2>edit profile</h2>
   <div>
    <form [formGroup]="formEdit" (ngSubmit)="onSubmit()">
     <div id="editData">
      <div id="editAvatar">
       @if(user.avatar){
       <img src="{{ user.avatar.secureUrl }}" alt="" /> } @else{
       <img src="../assets/Default_Avatar.png" alt="default Image" />
       }
       <input
        id="updateAvatar"
        type="file"
        placeholder="update your avatar"
        formControlName="avatar"
       />
      </div>
      <div id="editInfo">
       <input
        type="text"
        placeholder="{{ user.username }}"
        formControlName="username"
       />
       <input
        type="text"
        placeholder="{{ user.country }}"
        formControlName="country"
       />
      </div>
     </div>
     <button (click)="setViewState()">❌</button>
     <button type="submit" [disabled]="formEdit.invalid">✅</button>
    </form>
   </div>
  </div>
 `,
 styleUrls: ['myprofile-edit.component.css'],
})
export default class MyprofileEditComponent {
 @Input({
  required: true,
 })
 user!: User;
 activatedRoute = inject(ActivatedRoute);
 repo = inject(UsersService);
 main = inject(MyProfileComponent);
 state = inject(StateService);
 fb = inject(FormBuilder);
 formEdit: FormGroup;

 constructor() {
  this.formEdit = this.fb.group({
   avatar: [this.user.avatar || ''],
   username: [this.user.username],
   country: [this.user.country],
  });

  this.state.getState().subscribe((state) => {
   if (state.currenUser) this.user = state.currenUser;
  });
 }

 onSubmit() {
  // const editUser: UserUpdateDto = {
  //  avatar: this.formEdit.value.avatar,
  //  username: this.formEdit.value.username,
  //  country: this.formEdit.value.country,
  //  email: this.formEdit.value.email,
  //  password: this.formEdit.value.password,
  // };
  const editUser = new FormData() as UserUpdateDto;
  editUser.username = this.formEdit.value.username;
  editUser.country = this.formEdit.value.country;
  editUser.email = this.formEdit.value.email;
  editUser.avatar = this.formEdit.value.avatar;

  const id = this.user.id;

  return this.repo.update(id, editUser).subscribe((user) => {
   this.state.state.currenUser = user as User;
   console.log(user);
   this.setViewState();
  });
 }

 setViewState() {
  this.main.funcOption = 'view';
 }
}
