import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMessageProviderComponent } from './send-message-provider.component';

describe('SendMessageProviderComponent', () => {
  let component: SendMessageProviderComponent;
  let fixture: ComponentFixture<SendMessageProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendMessageProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMessageProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
