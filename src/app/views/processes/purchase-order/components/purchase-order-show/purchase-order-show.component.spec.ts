import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderShowComponent } from './purchase-order-show.component';

describe('PurchaseOrderShowComponent', () => {
  let component: PurchaseOrderShowComponent;
  let fixture: ComponentFixture<PurchaseOrderShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseOrderShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrderShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
