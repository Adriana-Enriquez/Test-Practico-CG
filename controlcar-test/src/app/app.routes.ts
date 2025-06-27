import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BudgetCreator } from './pages/budget-creator/budget-creator';
export const routes: Routes = [
      { path: '', component: BudgetCreator }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}