import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaAtendimentoComponent } from './sala-atendimento.component';

describe('SalaAtendimentoComponent', () => {
  let component: SalaAtendimentoComponent;
  let fixture: ComponentFixture<SalaAtendimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalaAtendimentoComponent]
    });
    fixture = TestBed.createComponent(SalaAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
