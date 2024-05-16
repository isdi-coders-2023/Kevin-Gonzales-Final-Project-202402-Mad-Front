import { ComponentFixture, TestBed } from '@angular/core/testing';
import MembersInfoComponent from './members-info.component';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { StateService } from '../../../services/state/state.service';
// import { StateService } from '../../../services/state/state.service';

describe('MembersInfoComponent', () => {
 let component: MembersInfoComponent;
 let fixture: ComponentFixture<MembersInfoComponent>;
 let stateServiceMock: jasmine.SpyObj<StateService>;
 let activatedRouteMock: unknown;

 beforeEach(async () => {
  stateServiceMock = jasmine.createSpyObj('StateService', ['getState']);
  activatedRouteMock = {
   params: of({ id: '123' }),
  };

  await TestBed.configureTestingModule({
   imports: [MembersInfoComponent],
   providers: [
    { provide: StateService, useValue: stateServiceMock },
    { provide: ActivatedRoute, useValue: activatedRouteMock },
   ],
  }).compileComponents();
 });

 beforeEach(() => {
  fixture = TestBed.createComponent(MembersInfoComponent);
  component = fixture.componentInstance;
 });

 it('should create', () => {
  expect(component).toBeTruthy();
 });

 it('should unsubscribe onDestroy', () => {
  spyOn(component.subscription, 'unsubscribe');
  component.ngOnDestroy();
  expect(component.subscription.unsubscribe).toHaveBeenCalled();
 });
});
