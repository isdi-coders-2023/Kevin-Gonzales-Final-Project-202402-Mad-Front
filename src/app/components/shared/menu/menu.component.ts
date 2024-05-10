import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  template: ` <nav>
    <ul>
      <li><a href="/clubs">Clubs</a></li>
      <li><a href="/members">Members</a></li>
      <li><a href="/shop">Shop (Soon)</a></li>
      <li><a href="/myprofile">My Profile</a></li>
    </ul>
  </nav>`,
  styles: `
  li{
    list-style: none;
  }
  `,
})
export class MenuComponent {}
