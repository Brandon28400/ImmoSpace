import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormachatComponent } from './formachat.component';

describe('FormachatComponent', () => {
  let component: FormachatComponent;
  let fixture: ComponentFixture<FormachatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormachatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormachatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
