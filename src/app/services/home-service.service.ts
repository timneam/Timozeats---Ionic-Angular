import { Injectable } from '@angular/core';
//import HttpClient and HttpHeaders for invoking HTTP requests
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  //declare and initiate the accessPointUrl 
  private headers: HttpHeaders;
  //this URL should be amend to indicate port number and API URI accordingly
  private accessPointUrl: string = 'https://localhost:44342/gateway/menus';

  constructor(private http:HttpClient) { 
    //construct a header to ensure all requests are of json type and utf-8 charset
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  //create function to retrieve menus with Timozeats Web API end point
  public retrieveAllMenus() {
    return this.http.get(this.accessPointUrl, {headers: this.headers});
  }

  public retriveMenuById(payload){
    return this.http.get(this.accessPointUrl + '/' + payload,
    {headers: this.headers});
  }

  public addNewMenu(payload){
    return this.http.post(this.accessPointUrl, payload, 
    {headers: this.headers});
  }

  public deleteMenuById(payload) {
    return this.http.delete(this.accessPointUrl + '/' + payload.id, 
    {headers: this.headers});
  }

  public updateMenuById(payload) {
    return this.http.put(this.accessPointUrl + '/' + payload.id, payload,
    {headers: this.headers});
  }



}
