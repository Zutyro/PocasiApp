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
  mesto: String = '';
  myDate: String = '';
  teplota: String = '';
  vitr: String = '';
  pocasi: JSON;
  lon: String = '';
  lat: String = '';
  lastRefresh: number = 0;
  newRefresh: number = 0;
  ikona: String = '';

  constructor(private weatherService: OpenweathermapService, private storage: Storage) {
    this.storage.get('city')
    .then(
      data => {
        if(data == null){
          this.mesto = 'London';
          this.storage.set('city', this.mesto)
          .then(
            () => console.log('Stored city!'),
            error => console.error('Error storing city', error)
          );
        }
        else
        this.mesto = data;
      },
      error => console.log(error),
  );
  this.RefreshPage();
  }

  public RefreshPage(){
    this.myDate = new Date().toISOString();
    this.newRefresh = +new Date();
    if(this.lastRefresh+3 < this.newRefresh){
      this.weatherService.getWeather(this.mesto).subscribe( 
      (data) => 
      {
        this.teplota = data['main']['temp'];
        this.vitr = data['wind']['speed'];
        this.lon = data['coord']['lon'];
        this.lat = data['coord']['lat'];
        this.ikona = "/assets/weather-icons/" + data['weather']['0']['icon'] + ".png";
        this.storage.set('city', this.mesto)
        .then(
          () => console.log('Stored city!'),
          error => console.error('Error storing city', error)
        );
        this.SaveNewWeather();
      },
      (err) => 
      {
        this.teplota = '';
        console.log('Chyba api');
        this.LoadOldWeather();
      }
      );
      this.lastRefresh = this.newRefresh;
    }
  }

  ionViewWillEnter(){
    this.CheckLanguage();
    this.RefreshPage();
  }

  public CheckLanguage(){
    this.storage.get('lang')
    .then(
      data => {console.log(data); this.lang = data},
      error => console.error(error),
  );
  }

  public SaveNewWeather(){
    this.weatherService.getWeather(this.mesto).subscribe( 
      (data) => 
      {
        this.storage.set('weather', JSON.stringify(data))
        .then(
          () => console.log('Stored weather!'),
          error => console.error('Error storing weather', error)
        );
      }
    );
    this.weatherService.getForecast(this.lon, this.lat).subscribe( 
      (data) => 
      {
        console.log(data);
        this.storage.set('forecast', JSON.stringify(data))
        .then(
          () => console.log('Stored forecast!'),
          error => console.error('Error storing forecast', error)
        );
      }
    );
  }

  public LoadOldWeather(){
    this.storage.get('weather')
    .then(
      data => {
        this.pocasi = JSON.parse(data);
        this.teplota = this.pocasi['main']['temp'];
        this.vitr = this.pocasi['wind']['speed'];
        this.ikona = "/assets/weather-icons/" + this.pocasi['weather']['0']['icon'] + ".png";
      },
      error => console.error(error),
  );
  }
}
