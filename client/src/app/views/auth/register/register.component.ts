import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  registerUserData={}
  siteKey : string;
  isSubmitBtnDisabled: boolean= false;

  constructor(private _auth:AuthService,private _router:Router ) {
    this.isSubmitBtnDisabled=false;
    this.siteKey="6Lc9dZcbAAAAAPVC1LJohuIeLIiK7zLp1CFAR0Ti"
  }

  ngOnInit(): void {}

  registerUser(){
    console.log(this.registerUserData)
    this._auth.registerUser(this.registerUserData).subscribe(
      res=> {
        console.log(res)
        this._router.navigate(['auth/login'])
      },
      err=> console.log(err)
    )
  }

  handleSuccess($event){
    console.log("sucessssss")
    this.isSubmitBtnDisabled = true
  }
}
