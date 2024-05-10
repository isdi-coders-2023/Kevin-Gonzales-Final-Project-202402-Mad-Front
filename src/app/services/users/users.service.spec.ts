import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UsersService } from './users.service';
import { environmentDev } from '../../../enviroments/environment.development';

const expectedUrl = new URL('users', environmentDev.apiUrl).href;

describe('UsersService', () => {
  let service: UsersService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UsersService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('When we use the login method', () => {
    it('should be a POST request', () => {
      service.login({ email: '', password: '' }).subscribe();
      const req = controller.expectOne(expectedUrl + '/login');
      expect(req.request.method).toBe('POST');
    });
  });

  describe('When we use the getById method', () => {
    it('should be a GET request', () => {
      service.getById('1').subscribe();
      const req = controller.expectOne(expectedUrl + '/1');
      expect(req.request.method).toBe('GET');
    });
  });

  describe('When we use the register method', () => {
    it('should be a POST request', () => {
      service.register({ username: '', email: '', password: '' }).subscribe();
      const req = controller.expectOne(expectedUrl + '/register');
      expect(req.request.method).toBe('POST');
    });
  });
});
