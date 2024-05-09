import { ComponentFixture, TestBed } from '@angular/core/testing';
import LoginComponent from './login.component';
import { StateService } from '../../services/state/state.service';
import { UsersService } from '../../services/users/users.service';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: StateService;
  let repoService: UsersService;

  const mockStateService = jasmine.createSpyObj('StateService', {
    getState: of({ loginState: 'logged' }),
    setLoginState: undefined,
    setLogin: undefined,
  });

  const mockUsersService = jasmine.createSpyObj('UsersService', {
    login: of({ token: 'mockToken' }),
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
    repoService = TestBed.inject(UsersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
