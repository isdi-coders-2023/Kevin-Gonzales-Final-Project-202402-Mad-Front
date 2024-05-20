import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { StateService } from '../../../services/state/state.service';

@Component({
 selector: 'app-menu-header',
 standalone: true,
 imports: [RouterModule],
 template: ` <nav>
  <ul class="menu">
   <li role="none" (click)="onClubs()">clubs</li>
   <li role="none" (click)="onMembers()">members</li>
   <li role="none" (click)="onShop()">shop (soon)</li>
   <li role="none" (click)="onMyProfile()">my profile</li>
   <li role="none" (click)="onLogOut()">logout</li>
  </ul>
 </nav>`,
 styleUrl: './menu-header.component.css',
})
export class MenuHeaderComponent {
 state = inject(StateService);
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
 onLogOut() {
  this.state.setLogout();
 }
}
