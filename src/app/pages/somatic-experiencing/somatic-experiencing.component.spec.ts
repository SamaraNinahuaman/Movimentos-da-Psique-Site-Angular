import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomaticExperiencingComponent } from './somatic-experiencing.component';

describe('SomaticExperiencingComponent', () => {
  let component: SomaticExperiencingComponent;
  let fixture: ComponentFixture<SomaticExperiencingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SomaticExperiencingComponent]
    });
    fixture = TestBed.createComponent(SomaticExperiencingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
