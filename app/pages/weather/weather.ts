import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
// import WeatherService
import {WeatherService} from '../../providers/weather-service/weather-service';


@Component({
  templateUrl: 'build/pages/weather/weather.html',
  // add WeatherService to providers
  providers:[WeatherService]
})

export class WeatherPage {
  
  info:string;

  //inject weatherService
  constructor(public nav: NavController, public weatherService: WeatherService) {
    this.weatherService = weatherService;
  }

  // load data when view is loaded
  ionViewLoaded() {
      //execute getInfo
      this.weatherService.getInfo().subscribe((data:any) => {
      this.info = data;
      console.log(data);
    }, 
    error => console.log(error),
    () => console.log('Get info complete'));
  }
}
