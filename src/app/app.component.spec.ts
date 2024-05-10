import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StateService } from './services/state/state.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  // let service: StateService;
  let fixture: ComponentFixture<AppComponent>;

  const mockStateService = jasmine.createSpyObj('StateService', {
    getState: of({ loginState: 'logged' }),
    setLogin: undefined,
  });

  beforeEach(async () => {
    spyOn(localStorage, 'getItem').and.returnValue(
      JSON.stringify({ token: 'mockToken' })
    );

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        {
          provide: StateService,
          useValue: mockStateService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    //    service = TestBed.inject(StateService);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
