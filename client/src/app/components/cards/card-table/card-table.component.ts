import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-card-table",
  templateUrl: "./card-table.component.html",
})
export class CardTableComponent implements OnInit {
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  games : any
  users : any
  constructor( private userservice:UserService ,private _router:Router ) {

      this.users = []
  }

  ngOnInit(): void {
    this.getPatients()
  }
  getPatients(){
    this.userservice.getpatients().subscribe(
      res=> {
        this.users=res
      },
      err=>{ 
       }
      )
    
  }
  detials(id){
    this._router.navigate(['/admin/maps',id])
  }
  
}
