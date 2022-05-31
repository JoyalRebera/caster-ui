import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnGoingAuditComponent } from './on-going-audit.component';

describe('OnGoingAuditComponent', () => {
  let component: OnGoingAuditComponent;
  let fixture: ComponentFixture<OnGoingAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnGoingAuditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnGoingAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
