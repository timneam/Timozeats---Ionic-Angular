import { Component, OnInit } from '@angular/core';
import { ScreensizeService } from '../services/screensize.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.page.html',
  styleUrls: ['./navbar.page.scss'],
})
export class NavbarPage implements OnInit {

  isDesktop: boolean;

  constructor(private screensizeService: ScreensizeService) {
    this.screensizeService.isDesktopView().subscribe(isDesktop => {
      if (this.isDesktop && !isDesktop) {
        // Reload because our routing is out of place
        window.location.reload();
      }
 
      this.isDesktop = isDesktop;
    });
  }
  
  ngOnInit() {
  }

}
