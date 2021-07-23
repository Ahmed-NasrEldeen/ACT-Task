import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import Chart from "chart.js";
@Component({
  selector: "app-maps",
  templateUrl: "./maps.component.html",
})
export class MapsComponent implements OnInit {
  medical = {medications:"no info",bloodpressure: "noinfo"}
  id
  constructor(private userService : UserService,private _router:Router,private _activatedRoute: ActivatedRoute) {
    
      this.id =this._activatedRoute.snapshot.paramMap.get('id')
      this.getinfo(this.id)
  }
  ngOnInit(): void {}

  ngAfterViewInit() {
    var config = {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: this.medical.bloodpressure,
            fill: false,
          },
         
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx: any = document.getElementById("line-chart") as HTMLCanvasElement;
    ctx = ctx.getContext("2d");
    new Chart(ctx, config);
  }

  getinfo(id){
    this.userService.getMedicalInfo(id).subscribe(
      res=> {
        if(res!==[]){
          this.medical = res[0]
        }
      },
      err=> console.log(err)
    )
  }

  extract(img,id){
    
    this.userService.extract(img,id).subscribe(
      res=> {
      },
      err=> {}
    )
  }


}
