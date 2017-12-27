import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetKeysComponent } from './budget-keys.component';

describe('BudgetKeysComponent', () => {
  let component: BudgetKeysComponent;
  let fixture: ComponentFixture<BudgetKeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetKeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
