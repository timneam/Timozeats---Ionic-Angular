import { Injectable } from '@angular/core';
//import HttpClient and HttpHeaders for invoking HTTP requests
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  //declare and initiate the accessPointUrl 
  private headers: HttpHeaders;
  //this URL should be amend to indicate port number and API URI accordingly
  private accessPointUrl: string = 'https://localhost:44342/gateway/trackers';

  constructor(private http:HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
   }

  //create function to retrieve menus with Timozeats Web API end point
  public retrieveAllTrackers() {
    return this.http.get(this.accessPointUrl, {headers: this.headers});
  }

  public retriveTrackerById(payload){
    return this.http.get(this.accessPointUrl + '/' + payload.id, 
    {headers: this.headers});
  }

  public addNewTracker(payload){
    return this.http.post(this.accessPointUrl, payload, 
    {headers: this.headers});
  }

  public deleteTrackerById(payload) {
    return this.http.delete(this.accessPointUrl + '/' + payload.id, 
    {headers: this.headers});
  }

  public updateTrackerById(payload) {
    return this.http.put(this.accessPointUrl + '/' + payload.id, payload,
    {headers: this.headers});
  }

}
