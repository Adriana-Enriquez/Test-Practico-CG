import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private availableProducts: Product[] = [
    {
      id: 'BAT1',
      name: 'Batería 45TOP',
      description: 'Batería de alta duración para vehículos.',
      price: 48000
    },
    {
      id: 'ACE123',
      name: 'Lubricante 10w40',
      description: 'Aceite para motor 10w40 sintético.',
      price: 22000
    },
    {
      id: 'FILTRO1',
      name: 'Filtro de aceite',
      description: 'Filtro compatible con línea Chevrolet.',
      price: 12000
    }
  ];

  private selectedProductsSubject = new BehaviorSubject<Product[]>([]);
  public selectedProducts$ = this.selectedProductsSubject.asObservable();

  getProducts(): Product[] {
    return [...this.availableProducts];
  }

  addProduct(product: Product): void {
    const current = this.selectedProductsSubject.value;
    this.selectedProductsSubject.next([...current, product]);
  }

  clear(): void {
    this.selectedProductsSubject.next([]);
  }
}