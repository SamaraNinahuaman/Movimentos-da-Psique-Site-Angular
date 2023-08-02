import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoTextWhiteComponent } from './logo-text-white.component';

describe('LogoTextWhiteComponent', () => {
  let component: LogoTextWhiteComponent;
  let fixture: ComponentFixture<LogoTextWhiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoTextWhiteComponent]
    });
    fixture = TestBed.createComponent(LogoTextWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
