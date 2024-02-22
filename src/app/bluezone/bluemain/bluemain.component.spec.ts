import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluemainComponent } from './bluemain.component';

describe('BluemainComponent', () => {
  let component: BluemainComponent;
  let fixture: ComponentFixture<BluemainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BluemainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BluemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
