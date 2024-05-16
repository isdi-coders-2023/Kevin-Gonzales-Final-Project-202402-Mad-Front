import { Component, OnDestroy, inject } from '@angular/core';
import { User } from '../../../models/users.model';
import { ActivatedRoute } from '@angular/router';
import { StateService } from '../../../services/state/state.service';
import { Subscription } from 'rxjs';

@Component({
 selector: 'app-members-info',
 standalone: true,
 imports: [],
 template: `
  <div id="userCard">
   <div id="userAvatar">
    <img src="../../../assets/Default_Avatar.png" alt="" />
   </div>
   <div id="userData">
    <p>{{ item.username }}</p>
    <p>{{ item.country }}</p>
    <p>{{ item.clubs }}</p>
   </div>
  </div>
 `,
 styleUrls: ['./members-info.component.css'],
})
export default class MembersInfoComponent implements OnDestroy {
 activatedRoute = inject(ActivatedRoute);
 state: StateService = inject(StateService);
 subscription: Subscription;
 item!: User;

 constructor() {
  this.subscription = this.activatedRoute.params.subscribe((params) => {
   this.state.getState().subscribe((state) => {
    try {
     this.item = state.users.find(
      (user: User) => user.id === params['id']
     ) as User;
    } catch (e) {
     new Error('User not found');
    }
   });
  });
 }

 ngOnDestroy(): void {
  this.subscription.unsubscribe();
 }
}
