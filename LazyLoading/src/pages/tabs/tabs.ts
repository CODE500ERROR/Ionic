import { Component } from '@angular/core';
import { IonicPage,NavController } from 'ionic-angular';


@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'UserPage';
  tab2Root = 'AboutPage';
  tab3Root = 'ContactPage';

  constructor() {

  }
}
