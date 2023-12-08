import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouleurComponent } from './couleur.component';

describe('CouleurComponent', () => {
  let component: CouleurComponent;
  let fixture: ComponentFixture<CouleurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouleurComponent]
    });
    fixture = TestBed.createComponent(CouleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
