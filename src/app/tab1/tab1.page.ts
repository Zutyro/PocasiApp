import { Component } from '@angular/core';
import {OpenweathermapService} from '../api/openweathermap.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  lang: string = '';
  mesto: String = 'London';
  myDate: String = '';
  teplota: String = '';
  constructor(private weatherService: OpenweathermapService, private storage: Storage) {
    this.myDate = new Date().toISOString();
    /*this.weatherService.getWeather(this.mesto,'068e4067b1fb55fde38d03b01d82c225').subscribe( (data) => 
    {
      this.teplota = data['main']['temp'];
    });*/
  }

  public RefreshPage(): void{
    this.myDate = new Date().toISOString();
    this.weatherService.getWeather(this.mesto,'068e4067b1fb55fde38d03b01d82c225').subscribe( (data) => 
    {
      this.teplota = data['main']['temp'];
    });
  }

  ionViewWillEnter(){
    this.CheckLanguage();
  }

  public async CheckLanguage(){
    this.storage.get('lang')
    .then(
    data => {console.log(data); this.lang = data},
    error => console.error(error),
  );
  }
}
