import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Article2Component } from './article2.component';

describe('Article2Component', () => {
  let component: Article2Component;
  let fixture: ComponentFixture<Article2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Article2Component]
    });
    fixture = TestBed.createComponent(Article2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
