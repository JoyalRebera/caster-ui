import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStatisticsComponent } from './dashboard-statistics';

describe('TotalListComponent', () => {
  let component: DashboardStatisticsComponent;
  let fixture: ComponentFixture<DashboardStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
