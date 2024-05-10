import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StateService } from './services/state/state.service';
import HomeComponent from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: ` <app-home /> `,
  styles: `
  *{
    box-sizing: border-box;
  }
  `,
  imports: [RouterOutlet, HomeComponent],
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
