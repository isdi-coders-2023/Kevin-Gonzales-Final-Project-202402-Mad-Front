import { ComponentFixture, TestBed } from '@angular/core/testing';
import ValidationsInfoComponent from './validations-info.component';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../../../services/state/state.service';
import { ClubsService } from '../../../services/clubs/clubs.service';

const mockUser = {
 role: 'admin',
};

const mockActivatedRoute = {
 snapshot: { data: { club: { name: 'test' } } },
};

const mockRouter = {
 navigate: jasmine.createSpy('navigate'),
};

const mockStateService = {
 getState: jasmine.createSpy().and.returnValue({ subscribe: () => {} }),
 state: {
  currenUser: mockUser,
 },
 getClub: jasmine.createSpy().and.returnValue({ subscribe: () => {} }),
 getClubs: jasmine.createSpy().and.returnValue({ subscribe: () => {} }),
};

const mockClubService = {
 getClub: jasmine.createSpy().and.returnValue({ subscribe: () => {} }),
};

describe('ValidationsInfoComponent', () => {
 let component: ValidationsInfoComponent;
 let fixture: ComponentFixture<ValidationsInfoComponent>;

 beforeEach(async () => {
  await TestBed.configureTestingModule({
   imports: [
    ValidationsInfoComponent,
    { provide: ActivatedRoute, useValue: mockActivatedRoute },
    { provide: Router, useValue: mockRouter },
    { provide: StateService, useValue: mockStateService },
    { provide: ClubsService, useValue: mockClubService },
   ],
  }).compileComponents();

  fixture = TestBed.createComponent(ValidationsInfoComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
 });

 it('should create', () => {
  expect(component).toBeTruthy();
 });
});
