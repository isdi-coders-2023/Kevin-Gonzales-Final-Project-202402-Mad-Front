import { ComponentFixture, TestBed } from '@angular/core/testing';
import ValidationsComponent from './validations.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ValidationsComponent', () => {
 let component: ValidationsComponent;
 let fixture: ComponentFixture<ValidationsComponent>;

 beforeEach(async () => {
  await TestBed.configureTestingModule({
   imports: [ValidationsComponent, HttpClientTestingModule],
  }).compileComponents();

  fixture = TestBed.createComponent(ValidationsComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
 });

 it('should create', () => {
  expect(component).toBeTruthy();
 });
});
