import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluePlanComponent } from './blue-plan.component';

describe('BluePlanComponent', () => {
  let component: BluePlanComponent;
  let fixture: ComponentFixture<BluePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BluePlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BluePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
