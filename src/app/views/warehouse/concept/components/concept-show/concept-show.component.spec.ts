import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptShowComponent } from './concept-show.component';

describe('ConceptShowComponent', () => {
  let component: ConceptShowComponent;
  let fixture: ComponentFixture<ConceptShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
