import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMyProdutsComponent } from './list-my-produts.component';

describe('ListMyProdutsComponent', () => {
  let component: ListMyProdutsComponent;
  let fixture: ComponentFixture<ListMyProdutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMyProdutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMyProdutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
