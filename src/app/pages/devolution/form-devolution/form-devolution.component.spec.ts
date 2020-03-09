import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDevolutionComponent } from './form-devolution.component';

describe('FormDevolutionComponent', () => {
  let component: FormDevolutionComponent;
  let fixture: ComponentFixture<FormDevolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDevolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDevolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
