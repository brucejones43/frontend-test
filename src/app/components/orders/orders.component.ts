import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/cartItem';
import { Order } from 'src/app/models/order';
import { OrderStatus } from 'src/app/models/orderStatus';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[]=[];
  
  orderItems: CartItem[]=[];

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {

    if (sessionStorage.getItem("loggedIn") === "true") {
      this.orderService.getAllOrders().subscribe(
        (resp) => this.orders = resp
        ,
        (error) => {
          console.log(error);
          if (error.status == 401) {
            sessionStorage.setItem("loggedIn", "false");
            sessionStorage.removeItem("loggedInUser");
            this.router.navigate(['login']);
          }
        },
        () => console.log("Orders retrieved!")
      );
    }
  }

  viewOrderDetails(cartId: number): void{
    this.orderService.getAllOrderItems(cartId).subscribe(
      (resp) => {
        this.orderItems = resp
        console.log(this.orderItems);
      },
      (error) => {
        console.log(error);
        if (error.status == 401) {
          sessionStorage.setItem("loggedIn", "false");
          sessionStorage.removeItem("loggedInUser");
          this.router.navigate(['login']);
        }
      }, 
      () => {
        console.log("Items Retrieved");
      }
    )
  }
}
