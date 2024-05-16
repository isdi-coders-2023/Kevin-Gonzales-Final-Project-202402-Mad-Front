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
    @if(item.logo!==null){
    <img src="{{ item.logo.secureUrl }}" alt=" {{ item.name }} shield" />
    }
    <img src="assets/default_shield.png" alt=" Default Shield" />
   </div>
   <div id="clubData">
    <h2>{{ item.name }}</h2>
    <p>{{ item.country }}</p>
    <p>{{ item.founded }}</p>
    <p>{{ item.description }}</p>
   </div>
  </div>
 `,
 styleUrl: './clubs-info.component.css',
})
export default class ClubsInfoComponent implements OnDestroy {
 activatedRoute = inject(ActivatedRoute);
 state: StateService = inject(StateService);
 subscription: Subscription;
 item!: Club;

 constructor() {
  this.subscription = this.activatedRoute.params.subscribe((params) => {
   this.state.getState().subscribe((state) => {
    try {
     this.item = state.clubs.find(
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
