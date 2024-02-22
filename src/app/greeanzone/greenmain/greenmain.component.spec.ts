import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenmainComponent } from './greenmain.component';

describe('GreenmainComponent', () => {
  let component: GreenmainComponent;
  let fixture: ComponentFixture<GreenmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenmainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreenmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
