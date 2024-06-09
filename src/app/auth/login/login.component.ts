import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';
import { LocalstorageService } from '../../shared/services/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm : FormGroup;
  inValidMessage = ''
  areCredentialInvalid = false

  constructor(private router : Router , private apiService : ApiService , private localStorageService : LocalstorageService){
    this.loginForm = new FormGroup({
       'email' : new FormControl(null,[Validators.required]),
       'password' : new FormControl(null,[Validators.required]),
    })
  }

  navigateToRegister(){
    this.router.navigate([`/register`])
  }

  isFieldValid(formField : string){
    return  (this.loginForm.get(formField)?.touched || this.loginForm.get(formField)?.dirty) && this.loginForm.get(formField)?.invalid
  }

  async onSubmit(){
    try{
      this.areCredentialInvalid = false
      const loginFormObject = {
        email : this.email?.value,
        password : this.password?.value
      } 
      console.log("LoginComponent -> onSubmit -> submitted form data",loginFormObject);
      const result : any = await this.apiService.login(loginFormObject);
      if(result){
         this.localStorageService.setItem('token',result.token);
      }
    } catch(error){
       this.areCredentialInvalid = true
       if(error.status === 401){
         this.inValidMessage = "Invalid Credential!"
       } else {
         this.inValidMessage = "Something went wrong!"
       }
    }
  }


  // getter methods 
   get email(){
      return this.loginForm.get('email')
   }

   get password(){
     return this.loginForm.get('password')
   }
}
