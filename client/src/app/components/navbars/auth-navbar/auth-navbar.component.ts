import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
@Component({
  selector: "app-auth-navbar",
  templateUrl: "./auth-navbar.component.html",
})
export class AuthNavbarComponent implements OnInit {
  navbarOpen = false;

  constructor(private _authService:AuthService) {}

  ngOnInit(): void {}

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }
}
