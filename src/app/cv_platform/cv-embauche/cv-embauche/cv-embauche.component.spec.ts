import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvEmbaucheComponent } from './cv-embauche.component';

describe('CvEmbaucheComponent', () => {
  let component: CvEmbaucheComponent;
  let fixture: ComponentFixture<CvEmbaucheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvEmbaucheComponent]
    });
    fixture = TestBed.createComponent(CvEmbaucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
