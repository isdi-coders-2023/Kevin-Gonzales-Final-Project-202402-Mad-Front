import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { StateService } from '../../../services/state/state.service';
import { UsersService } from '../../../services/users/users.service';

@Component({
 selector: 'app-menu',
 standalone: true,
 imports: [RouterModule],
 template: ` <nav>
  <ul>
   <li role="none" (click)="onClubs()">Clubs</li>
   <li role="none" (click)="onMembers()">Members</li>
   <li role="none" (click)="onShop()">Shop (Soon)</li>
   <li role="none" (click)="onMyProfile()">My Profile</li>
  </ul>
 </nav>`,
 styles: `
  li{
    list-style: none;
  }
  `,
})
export class MenuComponent {
 private repo = inject(UsersService);
 private state = inject(StateService);
 router = inject(Router);

 onClubs() {
  this.router.navigate(['clubs']);
 }
 onMembers() {
  this.router.navigate(['members']);
 }
 onShop() {
  this.router.navigate(['shop']);
 }
 onMyProfile() {
  this.router.navigate(['myprofile']);
 }
}
