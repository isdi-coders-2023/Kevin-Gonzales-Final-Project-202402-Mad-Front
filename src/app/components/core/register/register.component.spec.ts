import { ComponentFixture, TestBed } from '@angular/core/testing';
import RegisterComponent from './register.component';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { UsersService } from '../../../services/users/users.service';
import { StateService } from '../../../services/state/state.service';

describe('RegisterComponent', () => {
 let component: RegisterComponent;
 let fixture: ComponentFixture<RegisterComponent>;
 let service: UsersService;
 let router: Router;
 let state: StateService;

 beforeEach(async () => {
  const mockRouter = {
   navigate: jasmine.createSpy('navigate'),
  };

  const mockUserService = jasmine.createSpyObj('UsersService', {
   register: of({ token: 'test' }),
  });

  const mockService = {
   setLoginForm: jasmine.createSpy('setLoginForm'),
  };

  await TestBed.configureTestingModule({
   imports: [RegisterComponent],
   providers: [
    {
     provide: Router,
     useValue: mockRouter,
    },
    { provide: UsersService, useValue: mockUserService },
    { provide: StateService, useValue: mockService },
   ],
  }).compileComponents();

  state = TestBed.inject(StateService);
  service = TestBed.inject(UsersService);
  router = TestBed.inject(Router);
  fixture = TestBed.createComponent(RegisterComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
 });

 it('should create', () => {
  expect(component).toBeTruthy();
 });

 describe('onSubmit', () => {
  it('should register user ', () => {
   component.formRegister.setValue({
    username: 'test',
    email: '',
    password: '',
    birthday: '',
   });
   component.onSubmit();
   expect(service.register).toHaveBeenCalled();
   expect(router.navigate).toHaveBeenCalledWith(['home']);
  });
 });

 describe('onClickLogin', () => {
  it('should navigate to login', () => {
   component.onClickLogin();
   expect(state.setLoginForm).toHaveBeenCalled();
  });
 });
});
