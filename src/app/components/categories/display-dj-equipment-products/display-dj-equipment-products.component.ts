import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-display-dj-equipment-products',
  templateUrl: './display-dj-equipment-products.component.html',
  styleUrls: ['./display-dj-equipment-products.component.css']
})
export class DisplayDjEquipmentProductsComponent implements OnInit {

  allProducts: Product[] = [];

  constructor(private productService: ProductService, private router: Router, private titleService: Title) { 
    this.titleService.setTitle("DJ Equipment - Soul Sounds")
  }

  ngOnInit(): void {
    this.productService.getProductsByCategory("DJ Equipment").subscribe(
      (resp) => this.allProducts = resp,
      (err) => {
        console.log(err);
        if (err.status == 401) {
          sessionStorage.setItem("loggedIn", "false");
          this.router.navigate(['login']);
        } 
      },
      () => console.log("Products Retrieved")
    );
    
  }

}
