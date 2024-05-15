/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import MembersListComponent from './members-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { StateService } from '../../../services/state/state.service';
import { UsersService } from '../../../services/users/users.service';

describe('MembersListComponent', () => {
 let component: MembersListComponent;
 let fixture: ComponentFixture<MembersListComponent>;
 let repo: UsersService;
 let state: StateService;

 beforeEach(async () => {
  await TestBed.configureTestingModule({
   imports: [MembersListComponent, HttpClientTestingModule],
   providers: [HttpClient],
  }).compileComponents();

  repo = TestBed.inject(UsersService);
  state = TestBed.inject(StateService);
  fixture = TestBed.createComponent(MembersListComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
 });

 it('should create', () => {
  expect(component).toBeTruthy();
 });
});
