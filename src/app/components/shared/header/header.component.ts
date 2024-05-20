import { Component, inject } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { Router } from '@angular/router';
import { State, StateService } from '../../../services/state/state.service';
import { MenuHeaderComponent } from '../menu-header/menu-header.component';

@Component({
 selector: 'app-header',
 standalone: true,
 template: `
  <header>
   <h1 role="none" (click)="onClickLogo()">FAN'S WORLD</h1>
   @if(router.url !== '/home') {
   <app-menu-header />}
  </header>
 `,
 styleUrl: './header.component.css',
 imports: [MenuComponent, MenuHeaderComponent],
})
export class HeaderComponent {
 stateService = inject(StateService);
 state!: State;
 router = inject(Router);

 onClickLogo() {
  this.router.navigate(['/']);
 }

 onLogout() {
  this.stateService.setLogout();
 }
}
