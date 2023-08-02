import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicoterapiaComponent } from './psicoterapia.component';

describe('PsicoterapiaComponent', () => {
  let component: PsicoterapiaComponent;
  let fixture: ComponentFixture<PsicoterapiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PsicoterapiaComponent]
    });
    fixture = TestBed.createComponent(PsicoterapiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
