import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTableModel } from './product-table-model';

describe('ProductTableModel', () => {
  let component: ProductTableModel;
  let fixture: ComponentFixture<ProductTableModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductTableModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTableModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
