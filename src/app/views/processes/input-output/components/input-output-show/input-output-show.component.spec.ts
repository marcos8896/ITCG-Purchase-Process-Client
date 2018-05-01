import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputShowComponent } from './input-output-show.component';

describe('InputOutputShowComponent', () => {
  let component: InputOutputShowComponent;
  let fixture: ComponentFixture<InputOutputShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputOutputShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
