import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadConfirmationComponent } from './read-confirmation.component';

describe('ReadConfirmationComponent', () => {
  let component: ReadConfirmationComponent;
  let fixture: ComponentFixture<ReadConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
