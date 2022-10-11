
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { CartItem } from 'src/app/models/cartItem';
import { Order } from 'src/app/models/order';
import { OrderStatus } from 'src/app/models/orderStatus';
import { Product } from 'src/app/models/product';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

declare var window: any;

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[]=[];

  
  cartItems: CartItem[] =[];
  
  

  formModal:any;



  constructor(private orderService: OrderService, private productService: ProductService ,private router: Router) { }

  ngOnInit(): void {

    this.formModal = new window.bootstrap.Modal(
      document.getElementById("orderItemsModal")
    );
    
    

    if (sessionStorage.getItem("loggedIn") === "true") {
      this.orderService.getAllOrders().subscribe(
        (resp) => {this.orders = resp 
          this.orders.forEach((element)=>{
            let cartId = element.cart.id
            this.orderService.getOrderItem(cartId).subscribe(
              (resp) => this.cartItems = resp,
              (err) =>{
                console.log(err);
                if (err.status == 401) {
                  sessionStorage.setItem("loggedIn", "false");
                  this.router.navigate(['login']);
              }
            },
            () => console.log("OrdersItems retrieved!")
            );
          })
        }
        ,
        (error) => {
          console.log(error);
          if (error.status == 401) {
            sessionStorage.setItem("loggedIn", "false");
            this.router.navigate(['login']);
          }
        },
        () => console.log("Orders retrieved!")
      );

    }

  }

  viewOrderDetails(){
    this.formModal.show();
  }

  closeOrderDetails(){
    this.formModal.hide();

  }
}
