import { Component, Input, inject } from '@angular/core';
import { User } from '../../../models/users.model';
import { UsersService } from '../../../services/users/users.service';

@Component({
 selector: 'app-members-info',
 standalone: true,
 imports: [],
 template: ` <p>members-info works!</p> `,
 styles: ``,
})
export default class MembersInfoComponent {
 @Input({ required: true })
 item!: User;
 repo = inject(UsersService);
}
