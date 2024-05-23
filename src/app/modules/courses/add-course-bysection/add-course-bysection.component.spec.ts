import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseBysectionComponent } from './add-course-bysection.component';

describe('AddCourseBysectionComponent', () => {
  let component: AddCourseBysectionComponent;
  let fixture: ComponentFixture<AddCourseBysectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCourseBysectionComponent]
    });
    fixture = TestBed.createComponent(AddCourseBysectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
