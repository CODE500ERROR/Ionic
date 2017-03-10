import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Canciones page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-canciones',
  templateUrl: 'canciones.html'
})
export class CancionesPage {

  public playlistID:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.playlistID=this.navParams.get('playlistID');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancionesPage');
  }

}
