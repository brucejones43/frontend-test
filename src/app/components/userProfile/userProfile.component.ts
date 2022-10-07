import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-userProfile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.css']
})
export class userProfileComponent implements OnInit {

  updateForm = new UntypedFormGroup({
    firstname: new UntypedFormControl('', Validators.required),
    lastname: new UntypedFormControl('', Validators.required),
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    password: new UntypedFormControl('', Validators.required),
    streetaddress: new UntypedFormControl('', Validators.required),
    city: new UntypedFormControl('', Validators.required),
    state: new UntypedFormControl('', Validators.required),
    zipcode: new UntypedFormControl('', [Validators.required, Validators.minLength(5)])
    profile: new UntypedFormControl('', Validators.required),
  })
  


  constructor(private authService: AuthService, private router: Router, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Update User Profile");
  }
  
  onSubmit(): void {
    if(this.updateForm.valid){
      this.authService.updateForm(this.userForm.get('firstname')?.value, this.userForm.get('lastname')?.value, this.userForm.get('email')?.value, this.userForm.get('password')?.value, this.userForm.get('streetaddress')?.value,this.userForm.get('city')?.value, this.userForm.get('state')?.value, this.userForm.get('zipcode')?.value, this.userForm.get('profile')?.value).subscribe(
      () => console.log("User Profile Updated"),
      (err) => console.log(err),
      () => this.router.navigate(['update'])
    );
    
  }else{
    this.validateForm(this.updateForm);
  }

  }

  validateForm(untypedFormGroup: UntypedFormGroup){
    Object.keys(untypedFormGroup.controls).forEach(field =>{
      const control = untypedFormGroup.get(field);
      if(control instanceof UntypedFormControl){
        control.markAsTouched({onlySelf:true});
      }else if(control instanceof UntypedFormGroup){
        this.validateForm(control);
      }
    })
  }
 
  get f(){
    return this.userForm.controls;
  }
  readUrl(event: any) {
    if (event.target.files[0].size < 2000000) {/* checking size here - 2MB */ }
  }

  }


