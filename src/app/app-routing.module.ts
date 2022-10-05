import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DisplayDjEquipmentProductsComponent } from './components/display-dj-equipment-products/display-dj-equipment-products.component';
import { DisplayGuitarProductsComponent } from './components/display-guitar-products/display-guitar-products.component';
import { DisplayPianoProductsComponent } from './components/display-piano-products/display-piano-products.component';
import { DisplayProductsComponent } from './components/display-products/display-products.component';
import { DisplayWoodwindsProductsComponent } from './components/display-woodwinds-products/display-woodwinds-products.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: DisplayProductsComponent },
  { path: "products/category/guitars", component: DisplayGuitarProductsComponent },
  { path: "products/category/keyboards", component: DisplayPianoProductsComponent },
  { path: "products/category/woodwinds", component: DisplayWoodwindsProductsComponent },
  { path: "products/category/dj-equipment", component: DisplayDjEquipmentProductsComponent },
  { path: "cart", component: CartComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "order", component: OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
