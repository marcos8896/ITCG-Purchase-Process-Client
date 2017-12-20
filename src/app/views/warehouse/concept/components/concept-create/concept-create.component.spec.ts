import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptCreateComponent } from './concept-create.component';

describe('ConceptCreateComponent', () => {
  let component: ConceptCreateComponent;
  let fixture: ComponentFixture<ConceptCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
