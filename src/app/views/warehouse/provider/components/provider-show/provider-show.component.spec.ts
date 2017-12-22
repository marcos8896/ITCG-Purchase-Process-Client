import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderShowComponent } from './provider-show.component';

describe('ProviderShowComponent', () => {
  let component: ProviderShowComponent;
  let fixture: ComponentFixture<ProviderShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
