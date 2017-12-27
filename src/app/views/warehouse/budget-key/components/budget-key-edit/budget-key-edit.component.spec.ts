import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetKeyEditComponent } from './budget-key-edit.component';

describe('BudgetKeyEditComponent', () => {
  let component: BudgetKeyEditComponent;
  let fixture: ComponentFixture<BudgetKeyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetKeyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetKeyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
