import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../services/tracker.service';
import { OrderService } from '../services/order.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-trackers',
  templateUrl: './trackers.page.html',
  styleUrls: ['./trackers.page.scss'],
})
export class TrackersPage implements OnInit {
  
  trackingList: any = []; //list of trackers
  customerSearchResult: any [];
  orderList: any = [];

  constructor(
    private trackerService:TrackerService,
    private OrderService:OrderService,
    public AlertController: AlertController
  ) {}

  ngOnInit() {
    var userRole = localStorage.getItem("Role")
    if ( userRole == "admin") {
      this.trackerService.retrieveAllTrackers().subscribe((data: any) => this.trackingList = data);
    }
    else ("")
  }

    public searchForTracker(input){
      let searchTheList:any = [];
      this.trackerService.retrieveAllTrackers().subscribe(res => {
        searchTheList = res;
        console.log(searchTheList);
        this.customerSearchResult = searchTheList.filter(obj => {
          return obj.trackingNumber === input;
      });
      console.log(this.customerSearchResult);
    });
  }

  update(tracker) {
    const alert = this.AlertController.create({
    header: 'Update Tracker',
    inputs: [{name:'id', value:tracker.id },
    {name:'trackingNumber', value:tracker.trackingNumber},
    {name:'location', type:'text', value: tracker.location},
    {name:'status', value:tracker.status}],
    buttons: [
    { text: 'Cancel', role: 'cancel'},
    { text: 'Update Tracker', handler: (Data) => { //takes the data
      console.log(Data);
      this.trackerService.updateTrackerById(Data).subscribe(res =>{
        console.log('Tracker updated')
        location.reload();
      })
      }
    }
    ]}).then(alert => alert.present());
  }

}
