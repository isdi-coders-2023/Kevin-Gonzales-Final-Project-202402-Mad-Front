import { Component, OnDestroy, inject } from '@angular/core';
import { User } from '../../../models/users.model';
import { Router, RouterModule } from '@angular/router';
import MembersCardComponent from '../members-card/members-card.component';
import { StateService } from '../../../services/state/state.service';
import { Subscription } from 'rxjs';

@Component({
 selector: 'app-members-list',
 standalone: true,
 template: `
  <ul>
   @for( item of users; track $index){
   <li role="none" (click)="loadInfo(item.id)">
    <app-members-card [item]="item" />
   </li>
   }
  </ul>
 `,
 styles: `
 li{
  list-style:none
 }
 ul{
  padding:0px
}
 `,
 imports: [RouterModule, MembersCardComponent],
})
export default class MembersListComponent implements OnDestroy {
 state = inject(StateService);
 router = inject(Router);
 users: User[] = [];
 subscription: Subscription;

 constructor() {
  this.state.getUsers();
  this.subscription = this.state.getState().subscribe((state) => {
   this.users = state.users;
  });
 }

 loadInfo(id: string) {
  this.router.navigate(['members/', id]);
 }

 ngOnDestroy(): void {
  this.subscription.unsubscribe();
 }
}
