import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../services/home-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-menu-for-admin',
  templateUrl: './menu-for-admin.page.html',
  styleUrls: ['./menu-for-admin.page.scss'],
})
export class MenuForAdminPage implements OnInit {

  menu: any=[];
  public menuList: Array<any>;
  filterTerm: string;

  constructor(
    private menuService: HomeServiceService, 
    private formBuilder: FormBuilder, 
    public modalController: ModalController,
    public AlertController: AlertController) { 
    this.menuService.retrieveAllMenus().subscribe((data: any) => this.menuList = data);
  }

  ngOnInit() {
  }

  add() {
    const alert = this.AlertController.create({
    header: 'Add New Menu',
    inputs: [{name:'foodName', type:'text', placeholder:'Food Name'},
            {name:'foodPrice', type:'text', placeholder:'Food Price'},
            {name:'foodDetails', type:'text', placeholder:'Food Details'},
            {name:'foodCategory', type:'text', placeholder:'Food Category'}],
    buttons: [
    { text: 'Cancel', role: 'cancel'},
    { text: 'Add Food Item', handler: (Data) => { //takes the data
      console.log(Data);
      this.menuService.addNewMenu(Data).subscribe(res =>{
        console.log('Food Item Added')
        location.reload();
      })
      }
    }
    ]}).then(alert => alert.present());
  }

}
