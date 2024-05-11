import { Component, Input } from '@angular/core';
import { User } from '../../../models/users.model';

@Component({
 selector: 'app-members-card',
 standalone: true,
 imports: [],
 template: `
  <img src="../assets/Default_Avatar.png" alt="default Image" />
  <p>{{ item.username }}</p>
 `,
 styles: ``,
})
export default class MembersCardComponent {
 @Input()
 item!: User;
}
