import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoWhiteFullComponent } from './logo-white-full.component';

describe('LogoWhiteFullComponent', () => {
  let component: LogoWhiteFullComponent;
  let fixture: ComponentFixture<LogoWhiteFullComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoWhiteFullComponent]
    });
    fixture = TestBed.createComponent(LogoWhiteFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
