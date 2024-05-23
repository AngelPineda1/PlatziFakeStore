import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component'; // Importa el componente de detalles del producto
import { ProductListComponent } from './components/product-list/product-list.component';
const routes: Routes = [
  { path: 'products', component: ProductListComponent }, // Ruta para la lista de productos
  { path: 'products/:id', component: ProductDetailComponent }, // Ruta para los detalles del producto
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // Redirección predeterminadael producto con un parámetro de ID
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
