import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubsInfoComponent } from './clubs-info.component';

describe('ClubsInfoComponent', () => {
  let component: ClubsInfoComponent;
  let fixture: ComponentFixture<ClubsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubsInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClubsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
