import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth.service";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  loginData={}

  constructor(private _auth:AuthService,private _router:Router) {
 
  }

  ngOnInit(): void {}

  loginUser(){
    console.log(this.loginData)
    this._auth.loginUser(this.loginData).subscribe(
      res=> {
        console.log(res)
        localStorage.setItem('token',res.token)
        const currentUser  = this._auth.getUserInfo()
        if(currentUser.role == environment.roles.user)
          this._router.navigate(['/profile'])
        else
          this._router.navigate(['/admin'])

      },
      err=> console.log(err)
    )
  }
 
  
}
