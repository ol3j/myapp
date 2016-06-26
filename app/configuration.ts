// import injectable
import {Injectable} from '@angular/core';

// 7/ class for the Configuration.
@Injectable()
export class Configuration {
    public API_KEY:string = "753437e14874953dddba35177635d1d1";
    public Server: string = "http://api.openweathermap.org/";
    public ApiUrl: string = "data/2.5/weather";
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}