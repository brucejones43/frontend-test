import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  cartCount!: number;
  subscription!: Subscription;

  constructor(private authService: AuthService, private router: Router, private productService: ProductService) { }
  
  ngOnInit(): void {
    this.subscription = this.productService.getCart().subscribe(
      (cart) => this.cartCount = cart.cartCount
    );

    console.log(localStorage.getItem("mode"));

    if (localStorage.getItem("mode") === "dark") {
      
      let darkModeToggler = document.getElementById("checkbox");
      darkModeToggler?.setAttribute("checked", "true");

      let bodyBackground = document.getElementsByClassName("body-light-background");
      bodyBackground[0].classList.add('body-dark-background');
    
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logout() {
    this.authService.logout();
    sessionStorage.setItem("loggedIn", "false");
    this.router.navigate(['login']);
  }
  
  get isLoggedIn(){
    if (sessionStorage.getItem("loggedIn") === "true") {
      return true;
    } else {
      return false;
    }
    
  }

  toggleDarkMode() {
    console.log("TOGGLE");
    
    
    if (localStorage.getItem("mode") === "dark") {
      localStorage.removeItem("mode");
    } else {
      localStorage.setItem("mode", "dark");
    }
    let bodyBackground = document.getElementsByClassName("body-light-background");
    bodyBackground[0].classList.toggle('body-dark-background');

    let lightForeground = document.getElementsByClassName("light-foreground");
    let lightBackground = document.getElementsByClassName("light-background");
    let lightBackground2 = document.getElementsByClassName("light-background-2");

    //var darkForeground = document.getElementsByClassName("dark-foreground");
    var darkBackground = document.getElementsByClassName("dark-background");

    for (let i = 0; i < lightBackground.length; i++) {
      //lightBackground[i].classList.toggle('light-background');
      lightBackground[i].classList.toggle('dark-background');
      //lightBackground[i].classList.replace("light-background", "dark-background");
    }

    for (let i = 0; i < lightBackground2.length; i++) {
      //lightBackground[i].classList.toggle('light-background');
      lightBackground2[i].classList.toggle('dark-background-2');
      //lightBackground[i].classList.replace("light-background", "dark-background");
    }

    for (let i = 0; i < lightForeground.length; i++) {
      lightForeground[i].classList.toggle("dark-foreground");
    }
  }

}
