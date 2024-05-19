import { Component, Input } from '@angular/core';
import { User } from '../../../models/users.model';

@Component({
 selector: 'app-members-card',
 standalone: true,
 imports: [],
 template: `
  <div id="userCard">
   @if(item.avatar){
   <img src="{{ item.avatar.secureUrl }}" alt="{{ item.username }} avatar" />
   } @else {
   <img src="../assets/Default_Avatar.png" alt="{{ item.username }} avatar'" />
   }
   <p>{{ item.username }}</p>
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
export default class MembersCardComponent {
 @Input()
 item!: User;
}
