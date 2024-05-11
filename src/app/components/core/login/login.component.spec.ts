import { ComponentFixture, TestBed } from '@angular/core/testing';
import LoginComponent from './login.component';
import { of, throwError } from 'rxjs';
import { StateService } from '../../../services/state/state.service';
import { UsersService } from '../../../services/users/users.service';

describe('LoginComponent', () => {
 let component: LoginComponent;
 let fixture: ComponentFixture<LoginComponent>;
 let service: StateService;
 let usersService: UsersService;

 const mockStateService = jasmine.createSpyObj('StateService', {
  getState: of({ loginState: 'logged' }),
  setLoginState: undefined,
  setLogin: undefined,
  setRegisterForm: undefined,
 });

 const mockUsersService = jasmine.createSpyObj('UsersService', {
  login: jasmine.createSpy('login').and.returnValue(of({ token: 'mockToken' })),
  getById: jasmine.createSpy('getById').and.returnValue(of({})),
 });

 beforeEach(async () => {
  await TestBed.configureTestingModule({
   imports: [LoginComponent],
   providers: [
    { provide: StateService, useValue: mockStateService },
    { provide: UsersService, useValue: mockUsersService },
   ],
  }).compileComponents();

  fixture = TestBed.createComponent(LoginComponent);
  component = fixture.componentInstance;
  service = TestBed.inject(StateService);
  usersService = TestBed.inject(UsersService);
  fixture.detectChanges();
 });

 it('should create', () => {
  expect(component).toBeTruthy();
 });

 describe('submit', () => {
  it('should call login service with a user name', () => {
   (usersService.login as jasmine.Spy).and.returnValue(of({ token: 'token' }));
   component.formLogin.setValue({
    user: 'test',
    password: 'test',
   });
   component.submit();
   expect(usersService.login).toHaveBeenCalled();
   expect(service.setLogin).toHaveBeenCalled();
  });

  it('should call login service with an email', () => {
   (usersService.login as jasmine.Spy).and.returnValue(of({ token: 'token' }));
   component.formLogin.setValue({
    user: 'test@sample.com',
    password: 'test',
   });
   component.submit();
   expect(usersService.login).toHaveBeenCalled();
   expect(service.setLogin).toHaveBeenCalled();
  });

  it('should set login state to error', () => {
   (usersService.login as jasmine.Spy).and.returnValue(
    throwError(() => 'error')
   );
   component.submit();
   expect(service.setLoginState).toHaveBeenCalledWith('error');
  });
 });

 describe('onClickRegister', () => {
  it('should navigate to register', () => {
   component.onClickRegister();
   expect(service.setRegisterForm).toHaveBeenCalled();
  });
 });
});
