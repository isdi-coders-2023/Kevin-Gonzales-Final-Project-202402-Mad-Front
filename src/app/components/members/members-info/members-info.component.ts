import { Component, OnDestroy, inject } from '@angular/core';
import { User } from '../../../models/users.model';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../../../services/state/state.service';
import { Subscription } from 'rxjs';
import { MembersEditComponent } from '../members-edit/members-edit.component';
import { MembersDeleteComponent } from '../members-delete/members-delete.component';

@Component({
 selector: 'app-members-info',
 standalone: true,
 template: `
  <div id="userCard">
   @switch(funcOptions){@case ('View') {
   <div id="infoUser">
    <div id="userAvatar">
     @if (item.avatar) {
     <img src="{{ item.avatar.secureUrl }}" alt="{{ item.username }} avatar" />
     } @else{
     <img
      src="../../../assets/Default_Avatar.png"
      alt="{{ item.username }} avatar"
     />
     }
    </div>
    <div id="userData">
     <p>{{ item.username }}</p>
     <p>{{ item.country }}</p>
     <p>{{ item.clubs }}</p>
    </div>
   </div>
   <div id="btnInfoUser">
    <button (click)="onBack()">Back</button>
    @if (state.state.currenUser?.role === 'admin') {
    <button (click)="onEdit()">✏️</button>
    <button (click)="onDelete()">⛔️</button>
    }
   </div>
   } @case ('Edit') {
   <app-members-edit [user]="item" />
   } @case ('Delete') {
   <app-members-delete [user]="item" />
   }}
  </div>
 `,
 styleUrls: ['./members-info.component.css'],
 imports: [MembersEditComponent, MembersDeleteComponent],
})
export default class MembersInfoComponent implements OnDestroy {
 funcOptions: 'View' | 'Edit' | 'Delete' = 'View';
 activatedRoute = inject(ActivatedRoute);
 state: StateService = inject(StateService);
 subscription: Subscription;
 router = inject(Router);
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

 onBack(): void {
  this.router.navigate(['/members']);
 }

 onEdit(): void {
  this.funcOptions = 'Edit';
 }

 onDelete(): void {
  this.funcOptions = 'Delete';
 }
}
