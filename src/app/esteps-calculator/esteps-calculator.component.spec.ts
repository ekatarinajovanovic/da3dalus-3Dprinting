import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstepsCalculatorComponent } from './esteps-calculator.component';

describe('EstepsCalculatorComponent', () => {
  let component: EstepsCalculatorComponent;
  let fixture: ComponentFixture<EstepsCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstepsCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstepsCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
