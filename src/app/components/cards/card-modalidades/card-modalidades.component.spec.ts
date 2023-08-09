import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardModalidadesComponent } from './card-modalidades.component';

describe('CardModalidadesComponent', () => {
  let component: CardModalidadesComponent;
  let fixture: ComponentFixture<CardModalidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardModalidadesComponent]
    });
    fixture = TestBed.createComponent(CardModalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
