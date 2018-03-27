import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectableTableComponent } from './selectable-table.component';

describe('SelectableTableComponent', () => {
  let component: SelectableTableComponent;
  let fixture: ComponentFixture<SelectableTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectableTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
