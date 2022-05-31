import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingAuditComponent } from './pending-audit.component';

describe('PendingAuditComponent', () => {
  let component: PendingAuditComponent;
  let fixture: ComponentFixture<PendingAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingAuditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
