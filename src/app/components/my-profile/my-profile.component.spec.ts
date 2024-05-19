import { ComponentFixture, TestBed } from '@angular/core/testing';
import MyProfileComponent from './my-profile.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StateService } from '../../services/state/state.service';

describe('MyProfileComponent', () => {
 let component: MyProfileComponent;
 let fixture: ComponentFixture<MyProfileComponent>;
 const mockUser = {
  user: {},
 };
 const mockStateService = {
  getState: jasmine
   .createSpy('getState')
   .and.returnValue({ subscribe: () => {} }),
  state: { currenUser: mockUser },
 };
 beforeEach(async () => {
  await TestBed.configureTestingModule({
   declarations: [],
   imports: [MyProfileComponent, HttpClientTestingModule],
   providers: [{ provide: StateService, useValue: mockStateService }],
  }).compileComponents();

  fixture = TestBed.createComponent(MyProfileComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
 });

 it('should create', () => {
  expect(component).toBeTruthy();
 });

 describe('setEditState', () => {
  it('should set funcOption to edit', () => {
   component.setEditState();
   expect(component.funcOption).toBe('edit');
  });
 });

 describe('setDeleteState', () => {
  it('should set funcOption to delete', () => {
   component.setDeleteState();
   expect(component.funcOption).toBe('delete');
  });
 });
});
