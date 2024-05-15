import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { StateService } from '../../../services/state/state.service';

@Component({
 selector: 'app-menu',
 standalone: true,
 imports: [RouterModule],
 template: ` <nav>
  <ul class="menu">
   <li role="none" (click)="onClubs()">Clubs</li>
   <li role="none" (click)="onMembers()">Members</li>
   <li role="none" (click)="onShop()">Shop (Soon)</li>
   <li role="none" (click)="onMyProfile()">My Profile</li>
  </ul>
 </nav>`,
 styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
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
