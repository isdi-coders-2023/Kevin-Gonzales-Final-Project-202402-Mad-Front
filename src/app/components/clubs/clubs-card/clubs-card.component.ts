import { Component, Input } from '@angular/core';
import { Club } from '../../../models/clubs.model';

@Component({
 selector: 'app-clubs-card',
 standalone: true,
 imports: [],
 template: `
  <div id="clubCard">
   @if(club.logo!==null){
   <img src="{{ club.logo.secureUrl }}" alt="{{ club.name }} logo'" />
   }@else {
   <img src="../assets/default_logo.png" alt="{{ club.name }} logo'" />
   }
   <p>{{ club.name }}</p>
  </div>
 `,
 styleUrl: './clubs-card.component.css',
})
export class ClubsCardComponent {
 @Input()
 club!: Club;
}
