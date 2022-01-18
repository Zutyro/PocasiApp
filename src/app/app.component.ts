import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storage: Storage) {
  }

  async ngOnInit() {
    await this.storage.create();
    await SplashScreen.hide();
  }
}
