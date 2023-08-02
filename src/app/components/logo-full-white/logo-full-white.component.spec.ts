import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoFullWhiteComponent } from './logo-full-white.component';

describe('LogoFullWhiteComponent', () => {
  let component: LogoFullWhiteComponent;
  let fixture: ComponentFixture<LogoFullWhiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoFullWhiteComponent]
    });
    fixture = TestBed.createComponent(LogoFullWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
