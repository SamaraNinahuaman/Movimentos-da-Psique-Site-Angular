import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card3Component } from './card3.component';

describe('Card3Component', () => {
  let component: Card3Component;
  let fixture: ComponentFixture<Card3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card3Component]
    });
    fixture = TestBed.createComponent(Card3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
