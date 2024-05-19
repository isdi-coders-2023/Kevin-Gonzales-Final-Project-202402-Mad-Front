import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MembersCardComponent } from './members-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from '../../../models/users.model';

describe('MembersCardComponent', () => {
 let component: MembersCardComponent;
 let fixture: ComponentFixture<MembersCardComponent>;

 beforeEach(async () => {
  await TestBed.configureTestingModule({
   imports: [MembersCardComponent, HttpClientTestingModule],
  }).compileComponents();

  fixture = TestBed.createComponent(MembersCardComponent);
  component = fixture.componentInstance;
  component.user = {
   username: 'test',
  } as User;
  fixture.detectChanges();
 });

 it('should create', () => {
  expect(component).toBeTruthy();
 });
});
