import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

describe('MenuComponent', () => {
 let component: MenuComponent;
 let fixture: ComponentFixture<MenuComponent>;
 let router: Router;

 beforeEach(async () => {
  await TestBed.configureTestingModule({
   imports: [MenuComponent, HttpClientTestingModule],
   providers: [HttpClient],
  }).compileComponents();

  router = TestBed.inject(Router);
  fixture = TestBed.createComponent(MenuComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
 });

 it('should create', () => {
  expect(component).toBeTruthy();
 });

 describe('onClubs', () => {
  it('should navigate to clubs', () => {
   const spy = spyOn(router, 'navigate');
   component.onClubs();
   expect(spy).toHaveBeenCalledWith(['clubs']);
  });
 });

 describe('onMembers', () => {
  it('should navigate to members', () => {
   const spy = spyOn(router, 'navigate');
   component.onMembers();
   expect(spy).toHaveBeenCalledWith(['members']);
  });
 });

 describe('onShop', () => {
  it('should navigate to shop', () => {
   const spy = spyOn(router, 'navigate');
   component.onShop();
   expect(spy).toHaveBeenCalledWith(['shop']);
  });
 });

 describe('onMyProfile', () => {
  it('should navigate to myprofile', () => {
   const spy = spyOn(router, 'navigate');
   component.onMyProfile();
   expect(spy).toHaveBeenCalledWith(['myprofile']);
  });
 });
});
