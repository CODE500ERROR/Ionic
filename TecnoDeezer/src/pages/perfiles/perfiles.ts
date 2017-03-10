import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlaylistPage } from '../playlist/playlist';
/*
  Generated class for the Perfiles page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-perfiles',
  templateUrl: 'perfiles.html'
})
export class PerfilesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}


   goToPlaylist(id){
  	this.navCtrl.push(PlaylistPage,{userID:id});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilesPage');
  }



}
