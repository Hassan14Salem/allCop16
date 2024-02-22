import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitorsMainComponent } from './exhibitors-main.component';

describe('ExhibitorsMainComponent', () => {
  let component: ExhibitorsMainComponent;
  let fixture: ComponentFixture<ExhibitorsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhibitorsMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExhibitorsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
