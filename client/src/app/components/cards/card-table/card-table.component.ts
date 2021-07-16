import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "src/app/user.service";
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
      this.games = [{
          game : "Deus Ex: Mankind Divided",
          platform: " Xbox One, PS4, PC",
          release : "August 23"
      },
      {
          game : "Hue",
          platform: " Xbox One, PS4, Vita, PC",
          release : "August 23"
      },
      {
          game : "The Huntsman: Winter's Curse",
          platform: "PS4",
          release : "August 23"
      },
      {
          game : "The Huntsman: Winter's Curse",
          platform: "PS4",
          release : "August 23"
      }]
  }

  ngOnInit(): void {
    this.getPatients()
  }
  getPatients(){
    this.userservice.getpatients().subscribe(
      res=> {
        this.users=res
        console.log(res)
      },
      err=>{ 
        console.log(err)
       }
      )
    
  }
  detials(id){
    console.log(id)
    this._router.navigate(['/admin/maps',id])

  }
  
}
