import { Component, Input } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  header_name= "Covid-Tracker"
  // public appMenu = [
  //   {title:'Test1',url:'/test1',icon:'list'},
  //   {title:'Test2',url:'/test2',icon:'add'},
  //   {title:'Test3',url:'/test3',icon:'trash'}
  // ]
  // public appPages = [
  //   {
  //     title: 'Home',
  //     url: '/menu',
  //     icon: 'home'
  //   }
  // ];
 
   constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

 
  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();
    });
  }
 
}
