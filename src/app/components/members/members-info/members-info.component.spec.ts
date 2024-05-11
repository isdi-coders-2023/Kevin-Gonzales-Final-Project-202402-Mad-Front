import { ComponentFixture, TestBed } from '@angular/core/testing';

import MembersInfoComponent from './members-info.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('MembersInfoComponent', () => {
 let component: MembersInfoComponent;
 let fixture: ComponentFixture<MembersInfoComponent>;

 beforeEach(async () => {
  await TestBed.configureTestingModule({
   imports: [MembersInfoComponent, HttpClientTestingModule],
   providers: [HttpClient],
  }).compileComponents();

  fixture = TestBed.createComponent(MembersInfoComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
 });

 it('should create', () => {
  expect(component).toBeTruthy();
 });
});