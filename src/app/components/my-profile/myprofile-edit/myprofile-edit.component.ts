import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, Input, OnInit, inject } from '@angular/core';
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
       @if(user.avatar !== null){
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
export default class MyprofileEditComponent implements OnInit {
 @Input({
  required: true,
 })
 user!: User;
 activatedRoute = inject(ActivatedRoute);
 repo = inject(UsersService);
 state = inject(StateService);
 fb = inject(FormBuilder);
 formEdit!: FormGroup;
 main = inject(MyProfileComponent);

 constructor() {
  this.state.getState().subscribe((state) => {
   if (state.currenUser) this.user = state.currenUser;
  });
 }

 ngOnInit(): void {
  this.formEdit = this.fb.group({
   avatar: [''],
   username: [''],
   country: [''],
  });
 }

 onSubmit() {
  const editUser: UserUpdateDto = {
   country:
    this.formEdit.value.country === ''
     ? this.user.country
     : this.formEdit.value.country,
   avatar:
    this.formEdit.value.avatar === ''
     ? this.user.avatar
     : this.formEdit.value.avatar,
  };

  // const editUser = new FormData() as UserUpdateDto;
  // editUser.username = this.formEdit.value.username;
  // editUser.country = this.formEdit.value.country;
  // editUser.avatar = this.formEdit.value.avatar;

  const id = this.user.id;

  return this.repo.update(id, editUser).subscribe(() => {
   console.log(editUser.avatar);
   this.setViewState();
  });
 }

 setViewState() {
  this.main.funcOption = 'view';
 }
}
