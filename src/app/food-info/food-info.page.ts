import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { HomeServiceService } from '../services/home-service.service';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { collectExternalReferences } from '@angular/compiler';


@Component({
  selector: 'app-food-info',
  templateUrl: './food-info.page.html',
  styleUrls: ['./food-info.page.scss'],
})
export class FoodInfoPage implements OnInit {

  menuDetails: any = [];
  id:String
  myMenuForm: FormGroup;
  isSubmitted  =  false;

  constructor(
    private formBuilder: FormBuilder,
    private HomeService: HomeServiceService,
    private NavController:NavController,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) {
      this.myMenuForm  =  this.formBuilder.group({
        'id':'',
        'foodName': '',
        'foodPrice': '',
        'foodDetails': '',
        'foodCategory': ''
    });
   }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    // Retrieve the user information through userService
    this.HomeService.retriveMenuById(id).subscribe(result => {
    this.menuDetails = result;
    this.menuDetails.id = id;
    this.myMenuForm.patchValue(result);
    console.log(result)
    })
  }

  public onDelete(){
    this.HomeService.deleteMenuById(this.myMenuForm.value).subscribe(res => {
      console.log('Menu Deleted');
      this.router.navigate(['/menu-for-admin']);
    })
  }

  public onUpdate(){
      console.log(this.myMenuForm.value)
      this.HomeService.updateMenuById(this.myMenuForm.value).subscribe(res => {
      console.log('Menu Updated');
      this.router.navigate(['/menu-for-admin']);
    }) 
  }


}
