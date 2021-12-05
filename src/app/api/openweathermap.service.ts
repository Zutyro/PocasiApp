import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenweathermapService {

  constructor(private http: HttpClient) { }

  public getWeather(city: String, key: String) 
  {
    return this.http.get('api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+{key});
  }
}
