import { ComponentFixture, TestBed } from '@angular/core/testing';

import MyProfileComponent from './my-profile.component';

describe('MyProfileComponent', () => {
 let component: MyProfileComponent;
 let fixture: ComponentFixture<MyProfileComponent>;

 beforeEach(async () => {
  await TestBed.configureTestingModule({
   imports: [MyProfileComponent],
  }).compileComponents();

  fixture = TestBed.createComponent(MyProfileComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
 });

 it('should create', () => {
  expect(component).toBeTruthy();
 });

 describe('getState', () => {
  it('should return state', () => {
   expect(component.getState()).toBeTruthy();
  });
 });

 describe('when calling setProfileState', () => {
  it('should set profile state', () => {
   component.setProfileState('view');
   expect(component.state.profileState).toBe('view');
  });
 });
});
