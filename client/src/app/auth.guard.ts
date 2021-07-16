import { Injectable } from '@angular/core';
import { ActivatedRoute, CanActivate,Router,ActivatedRouteSnapshot} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _auth:AuthService,private _router:Router ){}
  canActivate(route: ActivatedRouteSnapshot):boolean
     {
       const currentUser = this._auth.getUserInfo()
       if(this._auth.loggedIn()&&currentUser.role === route.data.roles){
         console.log("roles" +currentUser.role + route.data.roles)
         return true
       }else{
         this._router.navigate(['/auth/login'])
         return false
       }
    
     }
  
}
