import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimakerCuraComponent } from './ultimaker-cura.component';

describe('UltimakerCuraComponent', () => {
  let component: UltimakerCuraComponent;
  let fixture: ComponentFixture<UltimakerCuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimakerCuraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UltimakerCuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
