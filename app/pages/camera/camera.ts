import {Component} from '@angular/core';
import {Alert, NavController} from 'ionic-angular';
//add Camera from ionic native
import {Camera} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/camera/camera.html',
})
export class CameraPage {
  public base64Image: string;

  constructor(public nav: NavController) { }

  //add action take a picture
  takePicture() {
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL
    })
      .then((image) => {
        //image is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + image;
      }, (error) => {
        //display alert if error
        let alert = Alert.create({
          title: 'Ups. Error occurs!',
          subTitle: 'Sorry, we have a error. Please try later or fix the bug.',
          buttons: ['OK']
        });
        this.nav.present(alert);
      });
  }

  goToHome(){
    this.nav.pop();
  }
}
