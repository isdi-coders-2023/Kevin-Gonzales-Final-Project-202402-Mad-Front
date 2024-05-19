import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClubsAddComponent } from './clubs-add.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ClubsAddComponent', () => {
 let component: ClubsAddComponent;
 let fixture: ComponentFixture<ClubsAddComponent>;

 beforeEach(async () => {
  await TestBed.configureTestingModule({
   imports: [ClubsAddComponent, HttpClientTestingModule],
  }).compileComponents();

  fixture = TestBed.createComponent(ClubsAddComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
 });

 it('should create', () => {
  expect(component).toBeTruthy();
 });
});
