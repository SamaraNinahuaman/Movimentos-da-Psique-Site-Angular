import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuarealogadaComponent } from './menuarealogada.component';

describe('MenuarealogadaComponent', () => {
  let component: MenuarealogadaComponent;
  let fixture: ComponentFixture<MenuarealogadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuarealogadaComponent]
    });
    fixture = TestBed.createComponent(MenuarealogadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
