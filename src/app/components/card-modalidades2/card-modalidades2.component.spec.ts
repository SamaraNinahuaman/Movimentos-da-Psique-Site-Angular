import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardModalidades2Component } from './card-modalidades2.component';

describe('CardModalidades2Component', () => {
  let component: CardModalidades2Component;
  let fixture: ComponentFixture<CardModalidades2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardModalidades2Component]
    });
    fixture = TestBed.createComponent(CardModalidades2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
