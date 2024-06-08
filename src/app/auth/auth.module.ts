import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


// primeNg imports
import { ButtonModule } from 'primeng/button';

const PRIME_NG_IMPORTS = [
  ButtonModule
]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ...PRIME_NG_IMPORTS
  ]
})
export class AuthModule { }