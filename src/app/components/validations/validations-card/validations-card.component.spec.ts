import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidationsCardComponent } from './validations-card.component';

describe('ValidationsListComponent', () => {
 let component: ValidationsCardComponent;
 let fixture: ComponentFixture<ValidationsCardComponent>;

 beforeEach(async () => {
  await TestBed.configureTestingModule({
   imports: [ValidationsCardComponent],
  }).compileComponents();

  fixture = TestBed.createComponent(ValidationsCardComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
 });

 it('should create', () => {
  expect(component).toBeTruthy();
 });
});
