import { TestBed } from '@angular/core/testing';
import { StateService } from './state.service';
import { of } from 'rxjs';
import { UsersService } from '../users/users.service';
import { ClubsService } from '../clubs/clubs.service';

describe('StateService', () => {
 let service: StateService;

 const mockUsersService = {
  login: jasmine.createSpy('login').and.returnValue(of({ token: 'faketoken' })),
  register: jasmine.createSpy('register').and.returnValue(of({})),
  getById: jasmine.createSpy('getById').and.returnValue(of({})),
 };

 const mockClubsService = {
  getClubs: of([]),
 };

 beforeEach(() => {
  TestBed.configureTestingModule({
   providers: [
    StateService,
    { provide: UsersService, useValue: mockUsersService },
    { provide: ClubsService, useValue: mockClubsService },
   ],
  });
  service = TestBed.inject(StateService);
  spyOn(service, 'jwtDecode').and.returnValue({ id: '1', role: 'user' });
 });

 it('should be created', () => {
  expect(service).toBeTruthy();
 });

 it('should set login state', () => {
  service.setLoginState('logged');
  service.getState().subscribe((state) => {
   expect(state.loginState).toBe('logged');
  });
 });

 it('should set register state', () => {
  service.setRegisterForm();
  service.getState().subscribe((state) => {
   expect(state.loginState).toBe('register');
  });
 });

 it('should get state', () => {
  service.getState().subscribe((state) => {
   expect(state).toEqual(service.state);
  });
 });

 describe('when we use setRegisterForm method', () => {
  it('should set register form', () => {
   service.setRegisterForm();
   service.getState().subscribe((state) => {
    expect(state.token).toBe(null);
    expect(state.currenPayload).toBe(null);
   });
  });
 });

 describe('When we use setLoginForm method', () => {
  it('should set login form', () => {
   service.setLoginForm();
   service.getState().subscribe((state) => {
    expect(state.loginState).toBe('idle');
   });
  });
 });

 describe('When we use setLogin method', () => {
  it('should login', () => {
   service.setLogin('fakeToken');
   service.getState().subscribe((state) => {
    expect(state.token).toBe('fakeToken');
    expect(state.currenPayload).toEqual({ id: '1', role: 'user' });
   });
  });
 });

 describe('When we use setLogout method', () => {
  it('should logout', () => {
   service.setLogout();
   service.getState().subscribe((state) => {
    expect(state.token).toBe(null);
    expect(state.currenPayload).toBe(null);
   });
  });
 });
});
