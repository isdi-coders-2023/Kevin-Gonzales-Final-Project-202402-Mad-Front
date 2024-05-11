import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyprofileEditComponent } from './myprofile-edit.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import MyProfileComponent from '../my-profile.component';

describe('MyprofileEditComponent', () => {
 let component: MyprofileEditComponent;
 let fixture: ComponentFixture<MyprofileEditComponent>;
 let main: MyProfileComponent;

 beforeEach(async () => {
  await TestBed.configureTestingModule({
   imports: [MyprofileEditComponent, HttpClientTestingModule],
   providers: [HttpClient, MyProfileComponent],
  }).compileComponents();

  main = TestBed.inject(MyProfileComponent);
  fixture = TestBed.createComponent(MyprofileEditComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
 });

 it('should create', () => {
  expect(component).toBeTruthy();
 });

 describe('when we click onSubmit', () => {
  it('should call the onSubmit function', () => {
   spyOn(component, 'onSubmit');
   component.onSubmit();
   expect(component.onSubmit).toHaveBeenCalled();
  });
  it('should call the setViewState function', () => {
   spyOn(component, 'setViewState');
   component.onSubmit();
   expect(component.setViewState).toHaveBeenCalled();
  });
 });

 describe('When we use setViewState', () => {
  it('should set the state', () => {
   component.setViewState();
   expect(main.state.profileState).toMatch('view');
  });
 });
});
