import { ComponentFixture, TestBed } from '@angular/core/testing';
import MyProfileComponent from './my-profile.component';
import { ActivatedRoute } from '@angular/router';
import { MyprofileViewComponent } from './myprofile-view/myprofile-view.component';
import MyprofileDeleteComponent from './myprofile-delete/myprofile-delete.component';
import MyprofileEditComponent from './myprofile-edit/myprofile-edit.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { StateService } from '../../services/state/state.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('MyProfileComponent', () => {
 let component: MyProfileComponent;
 let fixture: ComponentFixture<MyProfileComponent>;

 const mockStateService = {
  getState: jasmine
   .createSpy('getState')
   .and.returnValue({ subscribe: () => {} }),
  state: {
   loginState: 'idle',
   token: null,
   currenPayload: null,
   currenUser: {
    id: '1',
    username: 'testuser',
    email: '',
    role: 'user',
    avatar: null,
    clubs: [],
   },
   clubs: [],
   users: [],
  },
 };

 beforeEach(async () => {
  await TestBed.configureTestingModule({
   imports: [
    ReactiveFormsModule,
    MyProfileComponent,
    MyprofileViewComponent,
    MyprofileEditComponent,
    MyprofileDeleteComponent,
   ],
   providers: [
    FormBuilder,
    HttpClient,
    HttpHandler,
    { provide: ActivatedRoute, useValue: {} },
    { provide: StateService, useValue: mockStateService },
   ],
  }).compileComponents();

  fixture = TestBed.createComponent(MyProfileComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
 });

 it('should create', () => {
  expect(component).toBeTruthy();
 });
});
