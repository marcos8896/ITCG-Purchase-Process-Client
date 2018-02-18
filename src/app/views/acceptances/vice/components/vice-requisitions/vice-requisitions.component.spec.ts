import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViceRequisitionsComponent } from './vice-requisitions.component';

describe('ViceRequisitionsComponent', () => {
  let component: ViceRequisitionsComponent;
  let fixture: ComponentFixture<ViceRequisitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViceRequisitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViceRequisitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
