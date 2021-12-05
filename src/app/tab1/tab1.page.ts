import { Component } from '@angular/core';
import {OpenweathermapService} from '../api/openweathermap.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  myDate: String = new Date().toISOString();

  constructor(/*private weatherService: OpenweathermapService*/) {}

}
