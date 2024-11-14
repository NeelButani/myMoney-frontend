import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm! : FormGroup;
  somethingWentWrong = false
  errorMessages = ''

  constructor(private apiService : ApiService , private router : Router){
    this.initializeRegisterForm();
  }

  initializeRegisterForm(){
    this.registerForm = new FormGroup({
      'email' : new FormControl(null,[Validators.required]),
      'username' : new FormControl(null,[Validators.required]),
      'password' : new FormControl(null,[Validators.required])
    })
  }

  isFieldValid(formField : string){
    return  (this.registerForm.get(formField)?.touched || this.registerForm.get(formField)?.dirty) && this.registerForm.get(formField)?.invalid
  }

 async onSubmit(){
    try{
      this.somethingWentWrong = false;
      const registerData = {
        email : this.email?.value,
        username : this.username?.value,
        password : this.password?.value
      }
      const result = await this.apiService.register(registerData);
      if(result){
        console.log("successful registered");
        this.router.navigate(['login'])
      }
    }catch(error){
      console.error(error);
      this.somethingWentWrong = true;
      if(error.status === 403){
         this.errorMessages = 'User already exists'
      } else {
        this.errorMessages = 'Something went wrong'
      }
      this.registerForm.reset();
    }
  }

    // getter methods 
    get email(){
      return this.registerForm.get('email')
   }

   get password(){
     return this.registerForm.get('password')
   }

   get username(){
     return this.registerForm.get('username')
   }
}
