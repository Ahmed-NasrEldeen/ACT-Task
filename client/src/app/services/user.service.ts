import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private patientsUrl =environment.apilink+"/api/users"
  private medicalUrl =environment.apilink+"/api/medical/"
  private extractUrl =environment.apilink+"/api/extract"
  constructor(private http:HttpClient) {}
  
  getpatients(){
    return this.http.get<any>(this.patientsUrl)
  }

  getMedicalInfo(id){
    return this.http.get<any>(this.medicalUrl+`${id}`)

  }
  extract(img,id){
    return this.http.post<any>(this.extractUrl,{id,img})

  }

  
}
