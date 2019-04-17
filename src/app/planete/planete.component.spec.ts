import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneteComponent } from './planete.component';

describe('PlaneteComponent', () => {
  let component: PlaneteComponent;
  let fixture: ComponentFixture<PlaneteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
