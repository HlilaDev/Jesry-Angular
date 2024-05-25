import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuickAccessComponent } from './admin-quick-access.component';

describe('AdminQuickAccessComponent', () => {
  let component: AdminQuickAccessComponent;
  let fixture: ComponentFixture<AdminQuickAccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminQuickAccessComponent]
    });
    fixture = TestBed.createComponent(AdminQuickAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
