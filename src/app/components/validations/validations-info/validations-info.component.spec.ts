import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationsInfoComponent } from './validations-info.component';

describe('ValidationsInfoComponent', () => {
  let component: ValidationsInfoComponent;
  let fixture: ComponentFixture<ValidationsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationsInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidationsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
