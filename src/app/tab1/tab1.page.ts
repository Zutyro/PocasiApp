import { Component } from '@angular/core';
import {OpenweathermapService} from '../api/openweathermap.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  myDate: String = new Date().toISOString();
  teplota: String = this.weatherService.getWeather('London','068e4067b1fb55fde38d03b01d82c225')['main']/*['temp']*/;

  constructor(private weatherService: OpenweathermapService) {
  }

  public RefreshPage(): void{
    this.myDate = new Date().toISOString();
  }
}
