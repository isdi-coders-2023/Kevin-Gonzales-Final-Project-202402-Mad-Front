/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import MyprofileDeleteComponent from './myprofile-delete.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import MyProfileComponent from '../my-profile.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('MyprofileDeleteComponent', () => {
 let component: MyprofileDeleteComponent;
 let fixture: ComponentFixture<MyprofileDeleteComponent>;
 let formBuilder: FormBuilder;
 let router: Router;

 beforeEach(async () => {
  await TestBed.configureTestingModule({
   imports: [MyprofileDeleteComponent, ReactiveFormsModule],
   providers: [
    FormBuilder,
    Router,
    MyprofileDeleteComponent,
    MyProfileComponent,
    HttpClient,
    HttpHandler,
    { provide: ActivatedRoute, useValue: {} },
   ],
  }).compileComponents();

  formBuilder = TestBed.inject(FormBuilder);
  router = TestBed.inject(Router);
  fixture = TestBed.createComponent(MyprofileDeleteComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
 });

 it('should create', () => {
  expect(component).toBeTruthy();
 });

 describe('when we call confirmPasswordValidator', () => {
  it('should return null if passwords match', () => {
   const form = {
    get: (field: string) => {
     return {
      value: 'password' && 'confirmPassword',
     };
    },
   } as FormGroup;
   expect(component.confirmPasswordValidator(form)).toBeNull();
  });
 });
});
