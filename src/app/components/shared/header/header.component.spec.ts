import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersService } from '../../../services/users/users.service';
import { HttpClient } from '@angular/common/http';

describe('HeaderComponent', () => {
 let component: HeaderComponent;
 let fixture: ComponentFixture<HeaderComponent>;

 beforeEach(async () => {
  await TestBed.configureTestingModule({
   imports: [HeaderComponent, HttpClientTestingModule],
   providers: [UsersService, HttpClient],
  }).compileComponents();

  fixture = TestBed.createComponent(HeaderComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
 });

 it('should create', () => {
  expect(component).toBeTruthy();
 });

 it('should navigate to home when clicked on logo', () => {
  spyOn(component.router, 'navigate');
  component.onClickLogo();
  expect(component.router.navigate).toHaveBeenCalledWith(['/']);
 });
});
