import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{

  cartCount!: number;
  totalQuantity!: number;
  products: {
    product: Product,
    quantity: number
  }[] = [];
  subscription!: Subscription;
  totalPrice: number = 0;

  @Input() productInfo!: Product;

  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
    // this.subscription = this.productService.getUserCart().subscribe(
    //   (cart) => {
    //     this.productService.getCartItems().subscribe(
    //       (items) => {
    //         for (let item of items) {
    //           this.products.push({product: item.product, quantity: item.quantity});
    //         }
    //       },
    //       (error) => {
    //         console.log(error);
    //       },
    //       () => {
    //         // // this.products = cart.products;
    //         // this.products.forEach(
    //         //   (element) => this.cartProducts.push(element.product)
    //         // );
    //         this.totalPrice = cart.totalPrice;
    //         this.cartCount = cart.totalQuantity;
    //       }
    //     )
    //     // this.products = cart.products;
    //     // this.totalPrice = cart.totalPrice;
    //   }
    // );

    if (localStorage.getItem("mode") === "dark") {
      
      let darkModeToggler = document.getElementById("checkbox");
      darkModeToggler?.setAttribute("checked", "true");

      let bodyBackground = document.getElementsByClassName("body-light-background");
      bodyBackground[0].classList.add('body-dark-background');

      let lightForeground = document.getElementsByClassName("light-foreground");
      let lightBackground = document.getElementsByClassName("light-background");
      let lightBackground2 = document.getElementsByClassName("light-background-2");

      let lightButtonPrimary = document.getElementsByClassName("btn-primary");
      let lightButtonSuccess = document.getElementsByClassName("btn-outline-success");
      
      
      for (let i = 0; i < lightBackground.length; i++) {
        //lightBackground[i].classList.toggle('light-background');
        lightBackground[i].classList.add('dark-background');
        //lightBackground[i].classList.replace("light-background", "dark-background");
      }

      for (let i = 0; i < lightBackground2.length; i++) {
        //lightBackground[i].classList.toggle('light-background');
        lightBackground2[i].classList.add('dark-background-2');
        //lightBackground[i].classList.replace("light-background", "dark-background");
      }

      for (let i = 0; i < lightForeground.length; i++) {
        lightForeground[i].classList.add("dark-foreground");
      }

      for (let i = 0; i < lightButtonPrimary.length; i++) {
        lightButtonPrimary[i].classList.add("btn-primary-dark");
      }

      for (let i = 0; i < lightButtonSuccess.length; i++) {
        lightButtonSuccess[i].classList.add("btn-outline-success-dark");
      }
    }
  }

  addToCart(product: Product): void {
    let inCart = false;

    this.products.forEach(
      (element) => {
        if(element.product == product){
          ++element.quantity;
          // let cart = {
          //   cartCount: this.cartCount + 1,
          //   totalQuantity: this.totalQuantity +1,
          //   products: this.products,
          //   totalPrice: this.totalPrice + product.price
          // };
          // this.productService.setCart(cart);
          this.productService.addCartItem(product).subscribe(
            () => console.log("Item Added to Cart"),
            (error) => {
              console.log(error);
            }, 
            () => {
              console.log(this.totalQuantity);
              inCart=true;
              return;
            }
          );
          
        };
      }
    );

    if(inCart == false){
      // let newProduct = {
      //   product: product,
      //   quantity: 1
      // };
      // this.products.push(newProduct);
      // let cart = {
      //   cartCount: this.cartCount + 1,
      //   totalQuantity: this.totalQuantity +1,
      //   products: this.products,
      //   totalPrice: this.totalPrice + product.price
      // }
      // this.productService.setCart(cart);
      this.productService.addCartItem(product).subscribe(
        () => console.log("Item Added to Cart"),
        (error) => {
          console.log(error);
        }, 
        () => {
          console.log(this.totalQuantity);
        }
      );
    }
      
  }

  addToWishlist(product: Product): void {

    let inCart = false;

    this.products.forEach(
      (element) => {
        if(element.product == product){
          ++element.quantity;
          let cart = {
            cartCount: this.cartCount + 1,
            totalQuantity: this.totalQuantity +1,
            products: this.products,
            totalPrice: this.totalPrice + product.price
          };
          this.productService.setCart(cart);
          inCart=true;
          return;
        };
      }
    );

    if(inCart == false){
      let newProduct = {
        product: product,
        quantity: 1
      };
      this.products.push(newProduct);
      let cart = {
        cartCount: this.cartCount + 1,
        totalQuantity: this.totalQuantity +1,
        products: this.products,
        totalPrice: this.totalPrice + product.price
      }
      this.productService.setCart(cart);
    }
      
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
