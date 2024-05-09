import { ComponentFixture, TestBed } from '@angular/core/testing';
import HomeComponent from './home.component';
import { StateService } from '../../services/state/state.service';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: StateService;

  const mockStateService = jasmine.createSpyObj('StateService', {
    getState: of({ loginState: 'logged' }),
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [{ provide: StateService, useValue: mockStateService }],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
