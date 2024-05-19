import { Component, Input } from '@angular/core';
import { Club } from '../../../models/clubs.model';

@Component({
 selector: 'app-validations-card',
 standalone: true,
 imports: [],
 template: `
  <div id="validationCard">
   @if (club.logo!==null) {
   <img src="{{ club.logo.secureUrl }}" alt="{{ club.name }} logo" />
   } @else {
   <img src="../assets/default_logo.png" alt="{{ club.name }} logo" />
   }
   <p>{{ club.name }}</p>
  </div>
 `,
 styles: `
* {
 display: flex;
 gap: 10px;
 justify-content: center;
 align-items: center;
}


img {
 width: 20px;
 height: 20px;
}
 `,
})
export class ValidationsCardComponent {
 @Input({ required: true })
 club!: Club;
}
