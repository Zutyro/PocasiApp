import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenweathermapService {

  key: String = "068e4067b1fb55fde38d03b01d82c225";

  constructor(private http: HttpClient) { }

  public getWeather(city: String) 
  {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+this.key+'&units=metric');
  }

  public getForecast(city: String) 
  {
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid='+this.key+'&units=metric');
  }
}
