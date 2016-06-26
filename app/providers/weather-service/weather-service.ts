import {Injectable} from '@angular/core';
// import http
import {Http} from '@angular/http';
// import map
import 'rxjs/add/operator/map';
//import configuration
import {Configuration} from '../../configuration'

/*
  Generated class for the WeatherService provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.

  http://openweathermap.org/current
  http://openweathermap.org/find
  API KEY(appid)=753437e14874953dddba35177635d1d1
*/

// mark as injectable
@Injectable()
export class WeatherService {

  //inject configuration
  constructor(private http: Http, private configuration: Configuration) {}

  // 4/ simple action
  getInfo () {
     let req = this.configuration.ServerWithApiUrl + "?q=Poznan,pl&units=metric&appid=" + this.configuration.API_KEY;
     return this.http.get(req).map(res => res.json());
  }
}

