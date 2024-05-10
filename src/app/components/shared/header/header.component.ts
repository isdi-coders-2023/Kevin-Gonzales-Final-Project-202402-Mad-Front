import { Component, inject } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header>
      <h1 role="none" (click)="onClickLogo()">FAN'S WORLD</h1>
      <app-menu />
    </header>
  `,
  styles: `
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
  }

  h1{

  }`,
  imports: [MenuComponent],
})
export class HeaderComponent {
  router = inject(Router);

  onClickLogo() {
    this.router.navigate(['/']);
  }
}
