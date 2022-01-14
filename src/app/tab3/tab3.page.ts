import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  lang: string = '';
  constructor(private storage: Storage) {}

  public async ChangeToEnglish(){
    this.storage.set('lang', 'EN')
    .then(
    () => console.log('Stored item!'),
    error => console.error('Error storing item', error)
  );
  }

  public async ChangeToCzech(){
    this.storage.set('lang', 'CS')
    .then(
    () => console.log('Stored item!'),
    error => console.error('Error storing item', error)
  );
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
