import { ComponentFixture, TestBed } from '@angular/core/testing';
import MembersComponent from './members.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MembersComponent', () => {
 let component: MembersComponent;
 let fixture: ComponentFixture<MembersComponent>;

 beforeEach(async () => {
  await TestBed.configureTestingModule({
   imports: [MembersComponent, HttpClientTestingModule],
   providers: [HttpClient, MembersComponent],
  }).compileComponents();

  fixture = TestBed.createComponent(MembersComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
 });

 it('should create', () => {
  expect(component).toBeTruthy();
 });
});
