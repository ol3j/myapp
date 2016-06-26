import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
//import configuration
import {Configuration} from './configuration';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  //inject configuration to the app
  providers: [Configuration]
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
