import { Component, inject } from '@angular/core';
import ClubsListComponent from './clubs-list/clubs-list.component';
import { Router } from '@angular/router';
import { ClubsAddComponent } from './clubs-add/clubs-add.component';
import { StateService } from '../../services/state/state.service';
import { Subscription } from 'rxjs';
import { User } from '../../models/users.model';

@Component({
 selector: 'app-clubs',
 standalone: true,
 template: `
  @switch (funOptions) { @case ('view') {
  <div>
   <h2>clubs</h2>
   <app-clubs-list />
   <p role="none" (click)="onClick()">do you miss a club? Add it here</p>
   @if (user.role === 'admin') {
   <button (click)="onValidations()">❗️</button>
   }
  </div>
  } @case ('add') {
  <div>
   <h2>give us a club</h2>
   <app-clubs-add />
  </div>
  } }
 `,
 styles: `
    * {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2rem;
    margin-block: 2rem;
    height: 100%
  }
    `,
 imports: [ClubsListComponent, ClubsAddComponent],
})
export default class ClubsComponent {
 public funOptions: 'view' | 'add' = 'view';
 route = inject(Router);
 state = inject(StateService);
 subscription: Subscription;
 user!: User;

 constructor() {
  this.subscription = this.state.getState().subscribe(() => {
   this.user = this.state.state.currenUser as User;
  });
 }

 onClick() {
  this.funOptions = 'add';
 }

 onValidations() {
  this.route.navigate(['/validations']);
 }
}
