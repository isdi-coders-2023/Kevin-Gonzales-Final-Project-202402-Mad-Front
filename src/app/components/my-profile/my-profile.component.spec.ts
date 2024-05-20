import { ComponentFixture, TestBed } from '@angular/core/testing';
import MyProfileComponent from './my-profile.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StateService } from '../../services/state/state.service';
import { User } from '../../models/users.model';

describe('MyProfileComponent', () => {
 let component: MyProfileComponent;
 let fixture: ComponentFixture<MyProfileComponent>;
 const mockUser = {} as User;
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
  component.user = {
   id: '1',
   username: 'test',
   email: '',
   avatar: null,
   role: 'admin',
  } as unknown as User;
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
