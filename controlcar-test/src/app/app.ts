import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BudgetCreator } from './pages/budget-creator/budget-creator';
import { ProductTableModel } from './components/product-table-model/product-table-model';
import { ProductList } from './components/product-list/product-list';
import { Summary } from './components/summary/summary';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected title = 'controlcar-test';
}