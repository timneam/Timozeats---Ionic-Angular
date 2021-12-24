import { Component } from '@angular/core';
import { HomeServiceService } from '../services/home-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { CartService } from '../services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public menuList: Array<any>;
  menuDetails: any = [];
  id:string

  filterTerm: string;

  constructor(
    private HomeService: HomeServiceService, 
    private formBuilder: FormBuilder, 
    public modalController: ModalController,
    public AlertController: AlertController,
    public CartService:CartService,
    public activatedRoute:ActivatedRoute) { 
    this.HomeService.retrieveAllMenus().subscribe((data: any) => this.menuList = data);
  }

  ngOnInit() {
  }

  public addToCart(menu){
    console.log(menu)
      let id = localStorage.getItem("Id")
      let cartId = localStorage.getItem("cartNum")
      this.CartService.addFoodItemToCart(id, cartId, menu.id, menu.foodName, 1, menu.foodPrice).subscribe(res =>{
      console.log("Food item added to cart")
      location.reload();
    })
  }

}
