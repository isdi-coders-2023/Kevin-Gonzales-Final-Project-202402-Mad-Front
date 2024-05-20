import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubsEditComponent } from './clubs-edit.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';

describe('ClubsEditComponent', () => {
 let component: ClubsEditComponent;
 let fixture: ComponentFixture<ClubsEditComponent>;

 beforeEach(async () => {
  await TestBed.configureTestingModule({
   imports: [ClubsEditComponent, HttpClientTestingModule, ActivatedRoute],
  }).compileComponents();

  fixture = TestBed.createComponent(ClubsEditComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
 });

 it('should create', () => {
  expect(component).toBeTruthy();
 });
});
