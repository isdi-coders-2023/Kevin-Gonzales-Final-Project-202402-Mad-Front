import { Component, Input, inject } from '@angular/core';
import { User } from '../../../models/users.model';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../services/users/users.service';
import { StateService } from '../../../services/state/state.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import MembersInfoComponent from '../members-info/members-info.component';

@Component({
 selector: 'app-members-edit',
 standalone: true,
 imports: [ReactiveFormsModule],
 template: `
  <div>
   <h2>edit member</h2>
   <div>
    <form [formGroup]="formEditRole" (ngSubmit)="onSubmit()">
     <div>
      <div id="editAvatar">
       @if(user.avatar !== null){
       <img
        src="{{ user.avatar.secureUrl }}"
        alt="{{ user.username }} avatar"
       />
       } @else{
       <img
        src="../assets/Default_Avatar.png"
        alt="{{ user.username }} avatar"
       />
       }
       <input
        id="updateAvatar"
        type="file"
        placeholder="update your avatar"
        formControlName="avatar"
       />
      </div>
      <div id="editInfo">
       <select formControlName="role">
        <option value="admin">admin</option>
        <option value="user">user</option>
       </select>
      </div>
     </div>
     <div id="editBtns">
      <button (click)="main.funcOptions = 'View'">❌</button>
      <button type="submit">✅</button>
     </div>
    </form>
   </div>
  </div>
 `,
 styles: ``,
})
export class MembersEditComponent {
 @Input({ required: true })
 user!: User;

 activateRoute = inject(ActivatedRoute);
 repo = inject(UsersService);
 state = inject(StateService);
 fb = inject(FormBuilder);
 formEditRole: FormGroup;
 main = inject(MembersInfoComponent);

 constructor() {
  this.formEditRole = this.fb.group({
   avatar: [null],
   role: [this.user.role],
  });
 }

 onSubmit() {
  this.repo.update(this.user.id, this.formEditRole.value).subscribe(() => {
   this.main.funcOptions = 'View';
  });
 }
}
