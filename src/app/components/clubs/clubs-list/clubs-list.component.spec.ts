import { ComponentFixture, TestBed } from '@angular/core/testing';

import ClubsListComponent from './clubs-list.component';
import { HttpClient } from '@angular/common/http';

describe('ClubsListComponent', () => {
 let component: ClubsListComponent;
 let fixture: ComponentFixture<ClubsListComponent>;

 beforeEach(async () => {
  await TestBed.configureTestingModule({
   imports: [ClubsListComponent, HttpClient],
  }).compileComponents();

  fixture = TestBed.createComponent(ClubsListComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
 });

 it('should create', () => {
  expect(component).toBeTruthy();
 });
});
