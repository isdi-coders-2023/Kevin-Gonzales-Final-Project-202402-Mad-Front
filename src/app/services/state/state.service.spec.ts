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
  getAll: jasmine.createSpy('getUsers').and.returnValue(of({})),
  getById: jasmine.createSpy('getById').and.returnValue(of({})),
  getToken: jasmine.createSpy('getToken').and.returnValue('faketoken'),
  update: jasmine.createSpy('update').and.returnValue(of({})),
  delete: jasmine.createSpy('delete').and.returnValue(of({})),
 };

 const mockClubsService = {
  getClubs: jasmine.createSpy('getClubs').and.returnValue(of({})),
  getClubById: jasmine.createSpy('get').and.returnValue(of({})),
  createClub: jasmine.createSpy('create').and.returnValue(of({})),
  updateClub: jasmine.createSpy('update').and.returnValue(of({})),
  delete: jasmine.createSpy('delete').and.returnValue(of({})),
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

 it('loginState', () => {
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

 describe(' setRegisterForm ', () => {
  it('should set register form', () => {
   service.setRegisterForm();
   service.getState().subscribe((state) => {
    expect(state.token).toBe(null);
    expect(state.currenPayload).toBe(null);
   });
  });
 });

 describe('setLoginForm', () => {
  it('should set login form', () => {
   service.setLoginForm();
   service.getState().subscribe((state) => {
    expect(state.loginState).toBe('idle');
   });
  });
 });

 describe('setLogin ', () => {
  it('should login', () => {
   service.setLogin('fakeToken');
   service.getState().subscribe((state) => {
    expect(state.token).toBe('fakeToken');
    expect(state.currenPayload).toEqual({ id: '1', role: 'user' });
   });
  });
 });

 describe('setLogout', () => {
  it('should logout', () => {
   service.setLogout();
   service.getState().subscribe((state) => {
    expect(state.token).toBe(null);
    expect(state.currenPayload).toBe(null);
   });
  });
 });

 describe('getUsers', () => {
  it('should get users', () => {
   service.getUsers();
   expect(mockUsersService.getAll).toHaveBeenCalled();
  });
 });

 describe('getUser', () => {
  it('should get user', async () => {
   service.getUser('1');
   await expect(mockUsersService.getById).toHaveBeenCalled();
  });
 });

 describe('getClubs', () => {
  it('should get clubs', () => {
   service.getClubs();
   expect(mockClubsService.getClubs).toHaveBeenCalled();
  });
 });

 describe('getClub', () => {
  it('should get club', () => {
   service.getClub('1');
   expect(mockClubsService.getClubById).toHaveBeenCalled();
  });
 });
});
