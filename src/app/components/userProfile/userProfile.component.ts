import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-userProfile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.css']
})
export class userProfileComponent implements OnInit {
  loggedInUser!: User;

  updateForm = new UntypedFormGroup({
    firstname: new UntypedFormControl('', Validators.required),
    lastname: new UntypedFormControl('', Validators.required),
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    password: new UntypedFormControl('', Validators.required),
    streetaddress: new UntypedFormControl('', Validators.required),
    city: new UntypedFormControl('', Validators.required),
    state: new UntypedFormControl('', Validators.required),
    zipcode: new UntypedFormControl('', [Validators.required, Validators.minLength(5)]),
    profile: new UntypedFormControl('', Validators.required)
  })
  


  constructor(private authService: AuthService, private router: Router, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Update User Profile");
    let loggedInUser = JSON.parse(sessionStorage.loggedInUser || "{}");

    if (Object.keys(loggedInUser).length !== 0) {
      console.log(loggedInUser);
      this.updateForm.get('firstname')?.setValue(loggedInUser.firstName);
      this.updateForm.get('lastname')?.setValue(loggedInUser.lastName);
      this.updateForm.get('email')?.setValue(loggedInUser.email);
      this.updateForm.get('password')?.setValue(loggedInUser.password);
      this.updateForm.get('streetaddress')?.setValue(loggedInUser.address.line1);
      this.updateForm.get('city')?.setValue(loggedInUser.address.city);
      this.updateForm.get('state')?.setValue(loggedInUser.address.state);
      this.updateForm.get('zipcode')?.setValue(loggedInUser.address.zipcode);

      sessionStorage.setItem("loggedIn", "true");
      //this.loggedInUser = loggedInUser;

    } else {
      sessionStorage.setItem("loggedIn", "false");
      this.router.navigate(['login']);
    }
  }
  
  onSubmit(): void {
    if(this.updateForm.valid){
      this.authService.updateUser(this.updateForm.get('firstname')?.value, this.updateForm.get('lastname')?.value, this.updateForm.get('email')?.value, this.updateForm.get('password')?.value, this.updateForm.get('streetaddress')?.value,this.updateForm.get('city')?.value, this.updateForm.get('state')?.value, this.updateForm.get('zipcode')?.value, this.updateForm.get('profile')?.value).subscribe(
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
    return this.updateForm.controls;
  }
  readUrl(event: any) {
    if (event.target.files[0].size < 2000000) {/* checking size here - 2MB */ }
  }

  }


