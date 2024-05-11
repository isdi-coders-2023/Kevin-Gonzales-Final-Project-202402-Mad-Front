import { Component, inject } from '@angular/core';
import MyProfileComponent from '../my-profile.component';

@Component({
 selector: 'app-myprofile-view',
 standalone: true,
 imports: [],
 template: ` <h2>my profile</h2>
  <img src="../assets/Default_Avatar.png" alt="default Image" />
  <p>username</p>
  <p>country</p>
  <p>00/00</p>
  <p>clubs</p>

  <div>
   <button>validations</button>
   <button (click)="setEditState()">edit</button>
   <button (click)="setDeleteState()">delete</button>
  </div>`,
 styles: '',
})
export class MyprofileViewComponent {
 private main = inject(MyProfileComponent);

 setEditState() {
  this.main.setProfileState('edit');
 }

 setDeleteState() {
  this.main.setProfileState('delete');
 }
}
