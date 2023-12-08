import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteVisitComponent } from './carte-visit.component';

describe('CarteVisitComponent', () => {
  let component: CarteVisitComponent;
  let fixture: ComponentFixture<CarteVisitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarteVisitComponent]
    });
    fixture = TestBed.createComponent(CarteVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
