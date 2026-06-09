import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupStandingsComponent } from './group-standings-component';

describe('GroupStandingsComponent', () => {
  let component: GroupStandingsComponent;
  let fixture: ComponentFixture<GroupStandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupStandingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupStandingsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
