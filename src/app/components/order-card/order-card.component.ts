import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { Product } from 'src/app/models/product';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {

  products:{
    product: Product;
  }[] = [];


  @Input() orderInfo!: Order;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {

  }


  viewProducts(product: Product[]):void{

  }

}
