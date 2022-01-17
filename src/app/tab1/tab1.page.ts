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
  lastRefresh: number = 0;
  newRefresh: number = 0;
  constructor(private weatherService: OpenweathermapService, private storage: Storage) {
    /*this.myDate = new Date().toISOString();
    this.weatherService.getWeather(this.mesto).subscribe( (data) => 
    {
      this.teplota = data['main']['temp'];
    });
    this.SaveLastRefresh();
    this.lastRefresh = this.newRefresh;*/
    this.RefreshPage();
  }

  public RefreshPage(): void{
    this.myDate = new Date().toISOString();
    this.newRefresh = +new Date();
    if(this.lastRefresh+10000 < this.newRefresh){
      this.weatherService.getWeather(this.mesto).subscribe( (data) => 
      {
        this.teplota = data['main']['temp'];
      });
      this.lastRefresh = this.newRefresh;
    }
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
