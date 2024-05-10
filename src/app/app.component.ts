import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StateService } from './services/state/state.service';
import HomeComponent from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@Component({
 selector: 'app-root',
 standalone: true,
 template: `
  <app-header></app-header>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
 `,
 styles: `
  *{
    box-sizing: border-box;
  }
  `,
 imports: [RouterOutlet, HomeComponent, HeaderComponent, FooterComponent],
})
export class AppComponent {
 stateService = inject(StateService);

 constructor() {
  this.setInitialLogin();
 }

 setInitialLogin() {
  const stringToken = localStorage.getItem('fansWorldProject');
  if (stringToken) {
   const { token } = JSON.parse(stringToken);
   this.stateService.setLogin(token);
  }
 }
}
