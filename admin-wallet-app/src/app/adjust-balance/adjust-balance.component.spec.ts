import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustBalanceComponent } from './adjust-balance.component';

describe('AdjustBalanceComponentComponent', () => {
  let component: AdjustBalanceComponent;
  let fixture: ComponentFixture<AdjustBalanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdjustBalanceComponent]
    });
    fixture = TestBed.createComponent(AdjustBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
