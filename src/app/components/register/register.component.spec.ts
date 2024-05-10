import { ComponentFixture, TestBed } from '@angular/core/testing';
import RegisterComponent from './register.component';
import { UsersService } from '../../services/users/users.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let service: UsersService;
  let router: Router;

  const mockHttpClient = {
    get: jasmine.createSpy().and.returnValue(of({ data: {} })),
  };

  const mockUserService = jasmine.createSpyObj('UsersService', {
    register: jasmine.createSpy().and.returnValue(of({ data: {} })),
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponent],
      providers: [
        { provide: HttpClient, useValue: mockHttpClient },
        {
          provide: Router,
          useValue: jasmine.createSpyObj('Router', ['navigate']),
        },
        { provide: UsersService, useValue: mockUserService },
      ],
    }).compileComponents();

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
});
