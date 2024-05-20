import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfavsComponent } from './myfavs.component';

describe('MyfavsComponent', () => {
  let component: MyfavsComponent;
  let fixture: ComponentFixture<MyfavsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyfavsComponent]
    });
    fixture = TestBed.createComponent(MyfavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
