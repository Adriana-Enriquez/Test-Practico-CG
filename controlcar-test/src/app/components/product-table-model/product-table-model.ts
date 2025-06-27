import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../../services/product';

@Component({
  selector: 'app-product-table-model',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-table-model.html',
  styleUrl: './product-table-model.scss'
})
export class ProductTableModel {
  @Output() close = new EventEmitter<void>();
  products: Product[] = [];

  constructor(private ProductService: ProductService) {
    this.products = this.ProductService.getProducts();
  }

  add(product: Product) {
    this.ProductService.addProduct(product);
    this.close.emit();
  }
}