import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductList } from '../../components/product-list/product-list';
import { Product } from '../../services/product';
import { ProductTableModel } from '../../components/product-table-model/product-table-model';
import { NgIf, NgFor, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-budget-creator',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgIf,
    NgFor,
    NgTemplateOutlet,
    ProductTableModel,
    ProductList
  ],
  templateUrl: './budget-creator.html',
  styleUrl: './budget-creator.scss'
})
export class BudgetCreatorComponent {
  showModal = false;
  comment = '';
  selectedProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.productService.selectedProducts$.subscribe((products) => {
      this.selectedProducts = products;
    });
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  get total(): number {
    return this.selectedProducts.reduce((acc, product) => acc + product.price, 0);
  }

  save() {
    console.log('Presupuesto guardado:', {
      comment: this.comment,
      products: this.selectedProducts,
      total: this.total
    });
    alert('Presupuesto guardado en consola 💾');
  }
}