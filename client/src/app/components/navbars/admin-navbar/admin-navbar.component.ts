import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
@Component({
  selector: "app-admin-navbar",
  templateUrl: "./admin-navbar.component.html",
})
export class AdminNavbarComponent implements OnInit {
  constructor(private _authService:AuthService) {}

  ngOnInit(): void {}
}
