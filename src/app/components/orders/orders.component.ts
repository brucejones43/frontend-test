import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
            this.router.navigate(['login']);
          }
        },
        () => console.log("Orders retrieved!")
      );
    }
  }

  viewOrderDetails(): void{
    
  }
}
