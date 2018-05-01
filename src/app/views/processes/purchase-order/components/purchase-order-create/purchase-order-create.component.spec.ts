import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderCreateComponent } from './purchase-order-create.component';

describe('PurchaseOrderCreateComponent', () => {
  let component: PurchaseOrderCreateComponent;
  let fixture: ComponentFixture<PurchaseOrderCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseOrderCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrderCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
