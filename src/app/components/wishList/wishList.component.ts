import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-wishList',
  templateUrl: './wishList.component.html',
  styleUrls: ['./wishList.component.css']
})
export class wishListComponent implements OnInit {
  wishlistProducts: Product[] = [];

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router, private titleService: Title) { }

  ngOnInit(): void {
  }

}