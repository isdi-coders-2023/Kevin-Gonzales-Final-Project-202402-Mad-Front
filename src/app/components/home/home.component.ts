import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { StateService, State } from '../../services/state/state.service';
import { MenuComponent } from '../shared/menu/menu.component';
import LoginComponent from '../core/login/login.component';
import RegisterComponent from '../core/register/register.component';

@Component({
 selector: 'app-home',
 standalone: true,
 template: `
  @switch (state.loginState) { @case ('idle') {
  <app-login />
  }@case ('register') {
  <app-register />
  } @case ('logged') {
  <app-menu />
  } @case ('error') {
  <p>Try again</p>
  <app-login />
  }}
 `,
 styles: `
  *{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }`,
 imports: [
  HeaderComponent,
  LoginComponent,
  FooterComponent,
  MenuComponent,
  RegisterComponent,
 ],
})
export default class HomeComponent implements OnInit {
 stateService = inject(StateService);
 state!: State;

 ngOnInit() {
  this.stateService.getState().subscribe((state) => {
   this.state = state;
  });
 }
}
