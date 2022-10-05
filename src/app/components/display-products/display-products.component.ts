import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {

  allProducts: Product[] = [];

  constructor(private productService: ProductService, private router: Router, private titleService: Title) { 
    this.titleService.setTitle("Products - Soul Sounds")
  }

  ngOnInit(): void {
    if (sessionStorage.getItem("loggedIn") === "true") {
      this.productService.getProducts().subscribe(
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
    } else {
      this.router.navigate(['login']);
    }
    
  }

}
