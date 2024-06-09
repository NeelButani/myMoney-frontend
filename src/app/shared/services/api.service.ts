import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

   API_URL = 'http://localhost:3000/api/v1';

  constructor(private http : HttpClient) { }


  // login API
  async login(userData : any){
    try{
      return await lastValueFrom(this.http.post(`${this.API_URL}/users/login`,userData))
    }catch(err){
      console.error("API service -> login -> Error while login",err)
      throw err
    }
  }

  // register API
  async register(userData : any){
    try{
      return await lastValueFrom(this.http.post(`${this.API_URL}/users`,userData))
    }catch(err){
      console.error("API service -> register -> Error while register",err)
      throw err
    }
  }
}
