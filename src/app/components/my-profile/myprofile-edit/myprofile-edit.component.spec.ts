import { ComponentFixture, TestBed } from '@angular/core/testing';
import MyprofileEditComponent from './myprofile-edit.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import MyProfileComponent from '../my-profile.component';
import { ActivatedRoute } from '@angular/router';

describe('MyprofileEditComponent', () => {
 let component: MyprofileEditComponent;
 let fixture: ComponentFixture<MyprofileEditComponent>;

 beforeEach(async () => {
  await TestBed.configureTestingModule({
   imports: [MyprofileEditComponent, HttpClientTestingModule],
   providers: [
    HttpClient,
    MyProfileComponent,
    { provide: ActivatedRoute, useValue: {} },
    MyprofileEditComponent,
   ],
  }).compileComponents();

  fixture = TestBed.createComponent(MyprofileEditComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
 });

 it('should create', () => {
  expect(component).toBeTruthy();
 });
});
