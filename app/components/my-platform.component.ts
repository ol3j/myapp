import { Component } from '@angular/core';
import {Platform, PlatformVersion} from 'ionic-angular';

@Component({
  selector: 'my-platform',
  template: `
          <p><ion-icon name="logo-android" showWhen="android"></ion-icon>
           {{platforms}}</p>    
  `
})

export class MyPlatform {

  platforms: Array<string>;

  constructor(platform: Platform) {
    //get platforms
    this.platforms = platform.platforms();
    //get platform's version
    console.log(platform.version());
  }

}