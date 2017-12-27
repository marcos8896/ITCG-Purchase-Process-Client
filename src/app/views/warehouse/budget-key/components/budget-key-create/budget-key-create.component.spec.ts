import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetKeyCreateComponent } from './budget-key-create.component';

describe('BudgetKeyCreateComponent', () => {
  let component: BudgetKeyCreateComponent;
  let fixture: ComponentFixture<BudgetKeyCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetKeyCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetKeyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
