import { ComponentFixture, TestBed } from '@angular/core/testing';
import MembersInfoComponent from './members-info.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('MembersInfoComponent', () => {
 let component: MembersInfoComponent;
 let fixture: ComponentFixture<MembersInfoComponent>;

 beforeEach(async () => {
  await TestBed.configureTestingModule({
   imports: [MembersInfoComponent, HttpClientTestingModule],
   providers: [
    HttpClient,
    MembersInfoComponent,
    { provide: ActivatedRoute, useValue: {} },
   ],
  }).compileComponents();

  fixture = TestBed.createComponent(MembersInfoComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
 });

 it('should create', () => {
  expect(component).toBeTruthy();
 });
});
