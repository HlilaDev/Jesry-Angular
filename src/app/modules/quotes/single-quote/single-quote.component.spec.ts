import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleQuoteComponent } from './single-quote.component';

describe('SingleQuoteComponent', () => {
  let component: SingleQuoteComponent;
  let fixture: ComponentFixture<SingleQuoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleQuoteComponent]
    });
    fixture = TestBed.createComponent(SingleQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
