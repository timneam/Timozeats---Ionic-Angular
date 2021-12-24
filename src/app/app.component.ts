import { Component, HostListener } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { ScreensizeService } from './services/screensize.service';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private screensizeService: ScreensizeService,
    private navCtrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.screensizeService.onResize(this.platform.width());
    });
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event) {
    this.screensizeService.onResize(event.target.innerWidth);
  }
  
  logout(){
    localStorage.removeItem("Id");
    localStorage.removeItem("Role");
    localStorage.removeItem("cartNum")
  }

  menuForAdmin(){
    var userRole = localStorage.getItem('Role')
    if (userRole == "admin"){
      this.navCtrl.navigateForward('/menu-for-admin');
    } else {
      alert("Not Authorized")
    }
  }

  viewOrderAfterPlacingOrder(){
    var userRole = localStorage.getItem("Role")
    if (userRole == null) {
      alert("Please Sign In")
    }
    else {
      this.navCtrl.navigateForward('/orders');
    }
  }

}
