import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { Router } from '@angular/router';
import { StateService } from '../../services/state/state.service';

@Component({
 selector: 'app-my-profile',
 standalone: true,
 imports: [],
 template: `
  <h2>my profile</h2>
  <img src="" alt="" />
 `,
 styles: ``,
})
export default class MyProfileComponent {
 private repo = inject(UsersService);
 private state = inject(StateService);
 router = inject(Router);
}
