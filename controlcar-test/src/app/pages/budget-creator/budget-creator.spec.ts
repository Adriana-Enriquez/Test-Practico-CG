import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetCreator } from './budget-creator';

describe('BudgetCreator', () => {
  let component: BudgetCreator;
  let fixture: ComponentFixture<BudgetCreator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetCreator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetCreator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
