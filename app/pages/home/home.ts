import * as moment from 'moment';
import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  date:string;
  constructor(private _navController: NavController) {
    this.date = moment().add("days", 7).format("dd/MM/YYYY");
  }
}
