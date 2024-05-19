import { Component, OnDestroy, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Club } from '../../../models/clubs.model';
import { StateService } from '../../../services/state/state.service';
import { ClubsCardComponent } from '../clubs-card/clubs-card.component';

@Component({
 selector: 'app-clubs-list',
 standalone: true,
 template: `
  <ul>
   @for( item of clubs; track $index){
   <li role="none" (click)="loadInfo(item.id)">
    <app-clubs-card [club]="item" />
   </li>
   }
  </ul>
 `,
 styleUrl: './clubs-list.component.css',
 imports: [ClubsCardComponent],
})
export default class ClubsListComponent implements OnDestroy {
 state = inject(StateService);
 router = inject(Router);
 clubs: Club[] = [];
 subscription: Subscription;

 constructor() {
  this.state.getClubs();
  this.subscription = this.state.getState().subscribe((state) => {
   this.clubs = state.clubs;
  });
 }

 loadInfo(id: string) {
  this.router.navigate(['clubs/', id]);
 }

 ngOnDestroy(): void {
  this.subscription.unsubscribe();
 }
}
