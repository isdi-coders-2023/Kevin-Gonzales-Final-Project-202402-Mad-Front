import { Component, Input } from '@angular/core';
import { Club } from '../../../models/clubs.model';

@Component({
 selector: 'app-validations-card',
 standalone: true,
 imports: [],
 template: `
  <div id="validationCard">
   @if(item.logo!==null){
   <img src="{{ item.logo.secureUrl }}" alt="{{ item.name }}+'-logo'" />
   }@else{
   <img src="../assets/default_shield.png" alt="{{ item.name }}+'-logo'" />
   }
   <p>{{ item.name }}</p>
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
 @Input()
 item!: Club;
}
