import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArealogadaComponent } from './arealogada.component';

describe('ArealogadaComponent', () => {
  let component: ArealogadaComponent;
  let fixture: ComponentFixture<ArealogadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArealogadaComponent]
    });
    fixture = TestBed.createComponent(ArealogadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
