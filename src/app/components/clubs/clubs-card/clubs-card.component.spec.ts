import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubsCardComponent } from './clubs-card.component';

describe('ClubsCardComponent', () => {
  let component: ClubsCardComponent;
  let fixture: ComponentFixture<ClubsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
