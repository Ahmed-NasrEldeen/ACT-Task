import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl =environment.apilink+"/api/auth/signup"
  private _loginrUrl =environment.apilink+"/api/auth/login"
  private _forgotUrl =environment.apilink+"/api/auth/forgot"
  private _reset_password =environment.apilink+"/api/auth/reset"
  constructor(private http :HttpClient ,private router:Router) { 
  }
  registerUser(user){
  return this.http.post<any>(this._registerUrl,user)
  }

  loginUser(user){
    return this.http.post<any>(this._loginrUrl,user)
  }

  forgotPassword(user){
    return this.http.post<any>(this._forgotUrl,user)
  }

  resetPassword(user){
    return this.http.post<any>(this._reset_password,user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  getUserInfo(){
      
       return jwt_decode<any>(localStorage.getItem('token'));
   

  }
  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/landing'])
  }


}
