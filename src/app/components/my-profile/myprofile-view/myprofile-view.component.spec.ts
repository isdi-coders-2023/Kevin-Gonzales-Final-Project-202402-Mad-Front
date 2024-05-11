import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyprofileViewComponent } from './myprofile-view.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import MyProfileComponent from '../my-profile.component';

describe('MyprofileViewComponent', () => {
 let component: MyprofileViewComponent;
 let fixture: ComponentFixture<MyprofileViewComponent>;
 let main: MyProfileComponent;

 beforeEach(async () => {
  await TestBed.configureTestingModule({
   imports: [MyprofileViewComponent, HttpClientTestingModule],
   providers: [HttpClient, MyProfileComponent],
  }).compileComponents();

  main = TestBed.inject(MyProfileComponent);
  fixture = TestBed.createComponent(MyprofileViewComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
 });

 it('should create', () => {
  expect(component).toBeTruthy();
 });

 describe('setEditState', () => {
  it('should set profile state to edit', () => {
   component.setEditState();
   expect(main.state.profileState).toMatch('edit');
  });
 });

 describe('setDeleteStar', () => {
  it('should set profile state to delete', () => {
   component.setDeleteState();
   expect(main.state.profileState).toMatch('delete');
  });
 });
});
