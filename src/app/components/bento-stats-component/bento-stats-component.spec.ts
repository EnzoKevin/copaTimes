import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BentoStatsComponent } from './bento-stats-component';

describe('BentoStatsComponent', () => {
  let component: BentoStatsComponent;
  let fixture: ComponentFixture<BentoStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BentoStatsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BentoStatsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
