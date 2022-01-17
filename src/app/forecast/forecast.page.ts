import { Component} from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.page.html',
  styleUrls: ['./forecast.page.scss'],
})
export class ForecastPage{

  lang: string = '';
  id: number = 0;
  constructor(private storage: Storage) {
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
