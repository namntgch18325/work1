import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleCalculatorComponent } from './caculate.component';

describe('CaculateComponent', () => {
  let component: CircleCalculatorComponent;
  let fixture: ComponentFixture<CircleCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
