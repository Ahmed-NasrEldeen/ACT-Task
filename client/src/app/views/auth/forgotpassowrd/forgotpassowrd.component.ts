import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-forgotpassowrd',
  templateUrl: './forgotpassowrd.component.html',
})
export class ForgotpassowrdComponent implements OnInit {
  loginData={}

  constructor(private _auth:AuthService) {

   }


  ngOnInit(): void {
  }

  forgotPassword(){
    console.log(this.loginData)
    this._auth.forgotPassword(this.loginData).subscribe(
      res=> {
        console.log(res)
      },
      err=> console.log(err)
    )
  }

}
