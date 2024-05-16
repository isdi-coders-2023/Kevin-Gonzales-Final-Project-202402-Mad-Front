import { Component, Input } from '@angular/core';
import { Club } from '../../../models/clubs.model';

@Component({
 selector: 'app-clubs-card',
 standalone: true,
 imports: [],
 template: `
  <div id="userCard">
   @if(item.logo!==null){
   <img src="{{ item.logo.secureUrl }}" alt="{{ item.name }}+'-logo'" />
   }@else {
   <img src="../assets/default_shield.png" alt="{{ item.name }}+' logo'" />
   }
   <p>{{ item.name }}</p>
  </div>
 `,
 styleUrl: './clubs-card.component.css',
})
export class ClubsCardComponent {
 @Input()
 item!: Club;
}
