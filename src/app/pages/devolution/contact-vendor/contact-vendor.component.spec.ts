import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactVendorComponent } from './contact-vendor.component';

describe('ContactVendorComponent', () => {
  let component: ContactVendorComponent;
  let fixture: ComponentFixture<ContactVendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactVendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
