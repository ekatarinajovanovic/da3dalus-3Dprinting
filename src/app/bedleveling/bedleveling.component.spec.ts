import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedlevelingComponent } from './bedleveling.component';

describe('BedlevelingComponent', () => {
  let component: BedlevelingComponent;
  let fixture: ComponentFixture<BedlevelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BedlevelingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BedlevelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
