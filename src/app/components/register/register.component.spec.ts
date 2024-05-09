import { ComponentFixture, TestBed } from '@angular/core/testing';
import RegisterComponent from './register.component';
import { StateService } from '../../services/state/state.service';
import { UsersService } from '../../services/users/users.service';
import { of } from 'rxjs';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let service: StateService;
  let repoService: UsersService;

  const mockStateService = jasmine.createSpyObj('StateService', {
    getState: of({ loginState: 'logged' }),
    setRegister: of({ loginState: 'register' }),
  });

  const mockUserService = jasmine.createSpyObj('UsersService', {
    register: of({ data: {} }),
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponent],
      providers: [
        { provide: StateService, useValue: mockStateService },
        { provide: UsersService, useValue: mockUserService },
      ],
    }).compileComponents();

    service = TestBed.inject(StateService);
    repoService = TestBed.inject(UsersService);
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
