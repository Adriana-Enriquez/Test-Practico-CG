import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProductService, Product } from '../../services/product';
import { ProductTableModel } from '../../components/product-table-model/product-table-model';
import { ProductList} from '../../components/product-list/product-list';
import { Summary } from '../../components/summary/summary';

@Component({
  selector: 'app-budget-creator',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ProductTableModel,
    ProductList,
    Summary
  ],
  templateUrl: './budget-creator.html',
  styleUrl: './budget-creator.scss'
})
export class BudgetCreator {
  showModal = false;
  comment = '';
  selectedProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.productService.selectedProducts$.subscribe((products) => {
      this.selectedProducts = products;
    });
  }

  toggleModal(): void {
    this.showModal = !this.showModal;
  }

  get total(): number {
    return this.selectedProducts.reduce((sum, product) => sum + product.price, 0);
  }

  save(): void {
    console.log('Presupuesto guardado:', {
      comentario: this.comment,
      productos: this.selectedProducts,
      total: this.total
    });
    alert('Presupuesto guardado en consola 💾');
  }
}