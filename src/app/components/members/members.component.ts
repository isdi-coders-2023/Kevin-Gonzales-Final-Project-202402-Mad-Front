import { Component } from '@angular/core';
import MembersListComponent from './members-list/members-list.component';

@Component({
 selector: 'app-members',
 standalone: true,
 template: ` <h2>members</h2>
  <app-members-list />`,
 styles: ``,
 imports: [MembersListComponent],
})
export default class MembersComponent {}
