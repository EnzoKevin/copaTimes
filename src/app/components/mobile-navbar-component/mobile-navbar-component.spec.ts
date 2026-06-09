import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNavbarComponent } from './mobile-navbar-component';

describe('MobileNavbarComponent', () => {
  let component: MobileNavbarComponent;
  let fixture: ComponentFixture<MobileNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobileNavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileNavbarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
