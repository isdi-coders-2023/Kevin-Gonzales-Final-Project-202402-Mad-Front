import { TestBed } from '@angular/core/testing';
import {
 HttpClientTestingModule,
 HttpTestingController,
} from '@angular/common/http/testing';
import { UsersService } from './users.service';
import { environmentDev } from '../../../enviroments/environment.development';
import { UserRegisterDto } from '../../models/users.model';

const expectedUrl = new URL('users', environmentDev.apiUrl).href;

describe('UsersService', () => {
 let service: UsersService;
 let controller: HttpTestingController;

 beforeEach(() => {
  TestBed.configureTestingModule({
   imports: [HttpClientTestingModule],
   providers: [UsersService],
  });

  service = TestBed.inject(UsersService);
  controller = TestBed.inject(HttpTestingController);
 });

 it('should be created', () => {
  expect(service).toBeTruthy();
 });

 describe('getAll', () => {
  it('should call the correct URL', () => {
   service.getAll().subscribe();

   const req = controller.expectOne(expectedUrl);
   expect(req.request.method).toBe('GET');
  });
 });

 describe('getById', () => {
  it('should call the correct URL', () => {
   service.getById('1').subscribe();
   const req = controller.expectOne(`${expectedUrl}/1`);
   expect(req.request.method).toBe('GET');
  });
 });

 describe('login', () => {
  it('should call the correct URL', () => {
   service.login({ email: '', password: '' }).subscribe();
   expect(controller.expectOne(`${expectedUrl}/login`).request.method).toBe(
    'POST'
   );
  });
 });

 describe('register', () => {
  it('should call the correct URL', () => {
   service.register({} as UserRegisterDto).subscribe();
   expect(controller.expectOne(`${expectedUrl}/register`).request.method).toBe(
    'POST'
   );
  });
 });

 describe('getToken', () => {
  it('should return null', () => {
   localStorage.removeItem('token');
   expect(service.getToken()).toBeNull();
  });

  it('should return a token', () => {
   localStorage.setItem('token', JSON.stringify({ token: 'test' }));
   expect(service.getToken()).toEqual({ token: 'test' });
  });
 });

 describe('update', () => {
  it('should call the correct URL', () => {
   service.update('1', {} as UserRegisterDto).subscribe();
   expect(controller.expectOne(`${expectedUrl}/1`).request.method).toBe(
    'PATCH'
   );
  });
 });

 describe('delete', () => {
  it('should call the correct URL', () => {
   service.delete('1').subscribe();
   expect(controller.expectOne(`${expectedUrl}/1`).request.method).toBe(
    'DELETE'
   );
  });
 });
});
