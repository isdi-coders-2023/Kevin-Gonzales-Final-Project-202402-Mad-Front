import { Component, OnDestroy, inject } from '@angular/core';
import { ValidationsCardComponent } from './validations-card/validations-card.component';
import { Club } from '../../models/clubs.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StateService } from '../../services/state/state.service';

@Component({
 selector: 'app-validations',
 standalone: true,
 template: `
  <h2>validations</h2>
  <ul>
   @for( item of clubs; track $index){
   <li role="none" (click)="loadInfo(item.id)">
    <app-validations-card [item]="item" />
   </li>
   }
  </ul>
 `,
 styles: `
 *{
  text-align:center;
  font-size:2rem;
 }

 li{
  list-style:none
 }
 ul{
  padding:0px
}
 `,
 imports: [ValidationsCardComponent],
})
export default class ValidationsComponent implements OnDestroy {
 route = inject(Router);
 state = inject(StateService);
 clubs: Club[] = [];
 subscription: Subscription;

 constructor() {
  this.state.getClubs();
  this.subscription = this.state.getState().subscribe((state) => {
   this.clubs = state.clubs;
  });
 }

 loadInfo(id: string) {
  this.route.navigate(['validations/', id]);
  console.log('loadInfo');
 }

 ngOnDestroy(): void {
  this.subscription.unsubscribe();
 }
}
