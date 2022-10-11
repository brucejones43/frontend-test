import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: {
    product: Product,
    quantity: number
  }[] = [];
  totalPrice!: number;
  cartProducts: Product[] = [];

  constructor(private productService: ProductService, private router: Router, private titleService: Title) {
    this.titleService.setTitle("View Cart - Soul Sounds");
  }

  ngOnInit(): void {
    
    showLoader();
    this.productService.getUserCart().subscribe(
      (cart) => {
        console.log(cart);
        this.productService.getCartItems().subscribe(
          (items) => {
            hideLoader();
            for (let item of items) {
              this.products.push({product: item.product, quantity: item.quantity});
            }
          },
          (error) => {
            hideLoader();
            console.log(error);
          },
          () => {
            hideLoader();
            // this.products = cart.products;
            this.products.forEach(
              (element) => this.cartProducts.push(element.product)
            );
            this.totalPrice = cart.totalPrice;
          }
        )
        
      },
      (err) => {
        console.log(err);
        if (err.status == 401) {
          sessionStorage.setItem("loggedIn", "false");
          this.router.navigate(['login']);
        } 
      }
    );

    function showLoader() {
      document.getElementById("loaderSpinner")!.style.display = 'block';
    }
  
    function hideLoader() {
      document.getElementById("loaderSpinner")!.style.display = 'none';
    }

  }

  emptyCart(): void {
    let cart = {
      cartCount: 0,
      totalQuantity: 0,
      products: [],
      totalPrice: 0.00
    };
    this.productService.setCart(cart);
    this.router.navigate(['/home']);
  }

}
