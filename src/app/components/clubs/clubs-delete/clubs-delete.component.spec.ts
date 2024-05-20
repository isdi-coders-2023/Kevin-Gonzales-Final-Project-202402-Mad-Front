import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClubsDeleteComponent } from './clubs-delete.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import ClubsInfoComponent from '../clubs-info/clubs-info.component';
import { ActivatedRoute } from '@angular/router';

const mockActivatedRoute = {
 snapshot: { paramMap: { get: () => '1' } },
};

describe('ClubsDeleteComponent', () => {
 let component: ClubsDeleteComponent;
 let fixture: ComponentFixture<ClubsDeleteComponent>;

 beforeEach(async () => {
  await TestBed.configureTestingModule({
   imports: [
    ClubsDeleteComponent,
    HttpClientTestingModule,
    { provide: ActivatedRoute, useValue: mockActivatedRoute },
   ],
   providers: [ClubsInfoComponent],
  }).compileComponents();

  fixture = TestBed.createComponent(ClubsDeleteComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
 });

 it('should create', () => {
  expect(component).toBeTruthy();
 });
});
