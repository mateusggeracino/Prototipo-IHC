import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeItemComponent } from './analyze-item.component';

describe('AnalyzeItemComponent', () => {
  let component: AnalyzeItemComponent;
  let fixture: ComponentFixture<AnalyzeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
