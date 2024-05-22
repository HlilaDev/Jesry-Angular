import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllQuotesComponent } from './all-quotes.component';

describe('AllQuotesComponent', () => {
  let component: AllQuotesComponent;
  let fixture: ComponentFixture<AllQuotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllQuotesComponent]
    });
    fixture = TestBed.createComponent(AllQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
