import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputAllGeneratedComponent } from './input-output-all-generated.component';

describe('InputOutputAllGeneratedComponent', () => {
  let component: InputOutputAllGeneratedComponent;
  let fixture: ComponentFixture<InputOutputAllGeneratedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputOutputAllGeneratedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputAllGeneratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
