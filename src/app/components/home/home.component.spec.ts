import { ComponentFixture, TestBed } from '@angular/core/testing';
import HomeComponent from './home.component';
import { State, StateService } from '../../services/state/state.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('HomeComponent', () => {
 let component: HomeComponent;
 let fixture: ComponentFixture<HomeComponent>;
 let service: StateService;

 const mockStateService = jasmine.createSpyObj('StateService', {
  getState: of({ loginState: 'idle' }),
 });

 beforeEach(async () => {
  await TestBed.configureTestingModule({
   imports: [HomeComponent, HttpClientTestingModule],
   providers: [
    { provide: StateService, useValue: mockStateService },
    HttpClient,
   ],
  }).compileComponents();

  service = TestBed.inject(StateService);
  fixture = TestBed.createComponent(HomeComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
 });

 it('should create', () => {
  expect(component).toBeTruthy();
  expect(service.getState).toHaveBeenCalled();
  expect(component.state).toEqual({ loginState: 'idle' } as State);
 });
});
