import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenweathermapService {

  key: String = '2eb14c4eb129f7e4c8b6b06402bd8a1e';

  constructor(private http: HttpClient) { }

  public getWeather(city: String) 
  {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+this.key+'&units=metric');
  }

  public getForecast(lon: String, lat: String) 
  {
    return this.http.get('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&appid='+this.key+'&units=metric&exclude=current,minutely,hourly,alerts');
  }
}
