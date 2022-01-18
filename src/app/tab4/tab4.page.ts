import { Component} from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {

  lang: string = '';
  constructor(private storage: Storage) {
  }

  ionViewWillEnter(){
    this.CheckLanguage();
  }

  public CheckLanguage(){
    this.storage.get('lang')
    .then(
    data => {console.log(data); this.lang = data},
    error => console.error(error),
  );
  }

}
