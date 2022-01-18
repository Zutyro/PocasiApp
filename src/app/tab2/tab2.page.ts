import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  lang: string = '';
  date: Date = new Date();
  date1: Date = new Date();
  date1String: String;
  date2: Date = new Date();
  date2String: String;
  date3: Date = new Date();
  date3String: String;
  date4: Date = new Date();
  date4String: String;
  date5: Date = new Date();
  date5String: String;

  forecast: String;

  teplota1: String;
  teplota2: String;
  teplota3: String;
  teplota4: String;
  teplota5: String;

  ikona1: String;
  ikona2: String;
  ikona3: String;
  ikona4: String;
  ikona5: String;

  constructor(private storage: Storage) {
  }
  
  ionViewWillEnter(){
    this.CheckLanguage();
    this.SetDates();
    this.LoadForecast();
  }

  public CheckLanguage(){
    this.storage.get('lang')
    .then(
    data => {console.log(data); this.lang = data},
    error => console.error(error),
  );
  }

  public SetDates(){
    this.date = new Date();
    this.date1.setDate(this.date.getDate() + 1);
    this.date1String = this.date1.toISOString();
    this.date2.setDate(this.date.getDate() + 2);
    this.date2String = this.date2.toISOString();
    this.date3.setDate(this.date.getDate() + 3);
    this.date3String = this.date3.toISOString();
    this.date4.setDate(this.date.getDate() + 4);
    this.date4String = this.date4.toISOString();
    this.date5.setDate(this.date.getDate() + 5);
    this.date5String = this.date5.toISOString();
  }


  public LoadForecast(){
    this.storage.get('forecast')
    .then(
      data => {
        this.forecast = JSON.parse(data);
        this.teplota1 = this.forecast['daily']['0']['temp']['day'];
        this.ikona1 = "/assets/weather-icons/" + this.forecast['daily']['0']['weather']['0']['icon'] + ".png";
        this.teplota2 = this.forecast['daily']['1']['temp']['day'];
        this.ikona2 = "/assets/weather-icons/" + this.forecast['daily']['1']['weather']['0']['icon'] + ".png";
        this.teplota3 = this.forecast['daily']['2']['temp']['day'];
        this.ikona3 = "/assets/weather-icons/" + this.forecast['daily']['2']['weather']['0']['icon'] + ".png";
        this.teplota4 = this.forecast['daily']['3']['temp']['day'];
        this.ikona4 = "/assets/weather-icons/" + this.forecast['daily']['3']['weather']['0']['icon'] + ".png";
        this.teplota5 = this.forecast['daily']['4']['temp']['day'];
        this.ikona5 = "/assets/weather-icons/" + this.forecast['daily']['4']['weather']['0']['icon'] + ".png";
      },
      error => console.error(error),
  );
  }
}
