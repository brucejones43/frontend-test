import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-display-piano-products',
  templateUrl: './display-piano-products.component.html',
  styleUrls: ['./display-piano-products.component.css']
})
export class DisplayPianoProductsComponent implements OnInit {

  allProducts: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductsByCategory("Pianos").subscribe(
      (resp) => this.allProducts = resp,
      (err) => console.log(err),
      () => console.log("Products Retrieved")
    );


    if (localStorage.getItem("mode") === "dark") {

      let lightForeground = document.getElementsByClassName("light-foreground");
      let lightBackground = document.getElementsByClassName("light-background");
      let lightBackground2 = document.getElementsByClassName("light-background-2");
    
    
      //var darkForeground = document.getElementsByClassName("dark-foreground");
      var darkBackground = document.getElementsByClassName("dark-background");
    
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
    }

  }

}
