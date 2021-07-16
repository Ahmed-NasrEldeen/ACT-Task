import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
})
export class ResetpasswordComponent implements OnInit {
  reset_token =""
  loginData=<any>{}

  constructor(private _auth:AuthService, private _activatedRoute: ActivatedRoute,private _router:Router) {
    _activatedRoute.queryParams.subscribe(
      params => {
        this.reset_token=params['token']
        console.log('queryParams', this.reset_token)}
      
      
      );
   }

  ngOnInit(): void {
  }
  resetPassword(){
    this.loginData.reset_token = this.reset_token
    console.log(this.loginData)
    this._auth.resetPassword(this.loginData).subscribe(
      res=> {
        this._router.navigate(['/auth/login'])
      },
      err=> console.log(err)
    )
  }
}
