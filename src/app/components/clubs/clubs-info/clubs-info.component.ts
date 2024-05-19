import { Component, OnDestroy, inject } from '@angular/core';
import { Club } from '../../../models/clubs.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { StateService } from '../../../services/state/state.service';

@Component({
 selector: 'app-clubs-info',
 standalone: true,
 imports: [],
 template: `
  <div id="clubCard">
   <div id="clubLogo">
    @if (club.logo!==null) {
    <img src="{{ club.logo.secureUrl }}" alt="{{ club.name }} logo" />
    } @else {
    <img src="../assets/default_logo.png" alt="{{ club.name }} logo" />
    }
   </div>
   <div id="clubData">
    <h2>{{ club.name }}</h2>
    <p>{{ club.country }}</p>
    <p>{{ club.founded }}</p>
    <p>{{ club.description }}</p>
   </div>
  </div>
 `,
 styleUrl: './clubs-info.component.css',
})
export default class ClubsInfoComponent implements OnDestroy {
 activatedRoute = inject(ActivatedRoute);
 state: StateService = inject(StateService);
 subscription: Subscription;
 club!: Club;

 constructor() {
  this.subscription = this.activatedRoute.params.subscribe((params) => {
   this.state.getState().subscribe((state) => {
    try {
     this.club = state.clubs.find(
      (club: Club) => club.id === params['id']
     ) as Club;
    } catch (e) {
     new Error('Club not found');
    }
   });
  });
 }

 ngOnDestroy(): void {
  this.subscription.unsubscribe();
 }
}
