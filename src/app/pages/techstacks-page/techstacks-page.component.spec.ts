import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechstacksPageComponent } from './techstacks-page.component';

describe('TechstacksPageComponent', () => {
  let component: TechstacksPageComponent;
  let fixture: ComponentFixture<TechstacksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechstacksPageComponent]
    });
    fixture = TestBed.createComponent(TechstacksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
