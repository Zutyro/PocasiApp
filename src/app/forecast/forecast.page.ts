import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.page.html',
  styleUrls: ['./forecast.page.scss'],
})
export class ForecastPage{

  lang: string = '';
  id: string = '';
  
  date: Date = new Date();
  date1: Date = new Date();
  date1String: String;

  forecast: String;

  teplota1: String;
  teplota2: String;
  teplota3: String;
  teplota4: String;
  vitr: String;

  ikona: String;

  constructor(private storage: Storage, private activatedRoute: ActivatedRoute) {
  }

  ionViewWillEnter(){
    this.CheckLanguage();
    this.SetDates();
    this.LoadForecast();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  public async CheckLanguage(){
    this.storage.get('lang')
    .then(
    data => {console.log(data); this.lang = data},
    error => console.error(error),
  );
  }

  public SetDates(): void{
    this.date = new Date();
    this.date1.setDate(this.date.getDate() + parseInt(this.id)+1);
    this.date1String = this.date1.toISOString();
  }

  public async LoadForecast(){
    this.storage.get('forecast')
    .then(
      data => {
        this.forecast = JSON.parse(data);
        this.teplota1 = this.forecast['daily'][this.id]['temp']['morn'];
        this.teplota2 = this.forecast['daily'][this.id]['temp']['day'];
        this.teplota3 = this.forecast['daily'][this.id]['temp']['eve'];
        this.teplota4 = this.forecast['daily'][this.id]['temp']['night'];
        this.vitr = this.forecast['daily'][this.id]['wind_speed'];
        this.ikona = "/assets/weather-icons/" + this.forecast['daily'][this.id]['weather']['0']['icon'] + ".png";
      },
      error => console.error(error),
  );
  }

}
