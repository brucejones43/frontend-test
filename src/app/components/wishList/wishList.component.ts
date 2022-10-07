import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-wishList',
  templateUrl: './wishList.component.html',
  styleUrls: ['./wishList.component.css']
})
export class wishListComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document) { }

  ngOnInit(): void {
  }

}