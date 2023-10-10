import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevlearnComponent } from './revlearn.component';

describe('RevlearnComponent', () => {
  let component: RevlearnComponent;
  let fixture: ComponentFixture<RevlearnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RevlearnComponent]
    });
    fixture = TestBed.createComponent(RevlearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
