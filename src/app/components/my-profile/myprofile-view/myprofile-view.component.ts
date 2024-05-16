import { Component, Input, inject } from '@angular/core';
import { User } from '../../../models/users.model';
import MyProfileComponent from '../my-profile.component';
import { Router } from '@angular/router';
import { UsersService } from '../../../services/users/users.service';
import { StateService } from '../../../services/state/state.service';
import ClubsComponent from '../../clubs/clubs.component';

@Component({
 selector: 'app-myprofile-view',
 standalone: true,
 imports: [ClubsComponent],
 providers: [ClubsComponent],

 template: `
  <div id="myProfileCard">
   <h2>my profile</h2>
   <div id="profileView">
    <div id="dataView">
     <div id="imgView">
      @if(user.avatar!==null){
      <img src="{{ user.avatar.secureUrl }}" alt="avatar" />} @else{
      <img src="../assets/Default_Avatar.png" alt="default Image" />
      }
     </div>
     <div id="infoView">
      <p>{{ user.username }}</p>
      <p>{{ user.email }}</p>
      <p>{{ user.country }}</p>
      <p>{{ user.clubs }}</p>
     </div>
    </div>
    <div id="buttoms">
     @if(user.role==='admin'){
     <button (click)="onValidation()">❗️</button>
     }
     <button (click)="setEditForm()">✏️</button>
     <button (click)="setDeleteState()">⛔️</button>
    </div>
   </div>
  </div>
 `,
 styleUrl: './myprofile-view.component.css',
})
export class MyprofileViewComponent {
 @Input({
  required: true,
 })
 user!: User;
 main = inject(MyProfileComponent);
 route = inject(Router);
 service = inject(UsersService);
 state = inject(StateService);
 repoClub = inject(ClubsComponent);

 setEditForm() {
  this.main.setEditState();
 }

 setDeleteState() {
  this.main.setDeleteState();
 }

 onValidation() {
  this.route.navigate(['validations']);
 }
}
