import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraHomeComponent } from './extra-home.component';

describe('ExtraHomeComponent', () => {
  let component: ExtraHomeComponent;
  let fixture: ComponentFixture<ExtraHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtraHomeComponent]
    });
    fixture = TestBed.createComponent(ExtraHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
