import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-display-piano-products',
  templateUrl: './display-piano-products.component.html',
  styleUrls: ['./display-piano-products.component.css']
})
export class DisplayPianoProductsComponent implements OnInit {

  allProducts: Product[] = [];

  constructor(private productService: ProductService, private router: Router, private titleService: Title) { 
    this.titleService.setTitle("Keyboard Products - Soul Sounds")
  }

  ngOnInit(): void {
    this.productService.getProductsByCategory("Pianos").subscribe(
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
