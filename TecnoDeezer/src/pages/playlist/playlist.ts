import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CancionesPage } from '../canciones/canciones';

/*
  Generated class for the Playlist page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html'
})
export class PlaylistPage {
  
	public userID:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	
	this.userID=this.navParams.get('userID');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaylistPage');
  }

  openPlaylist(id){
    this.navCtrl.push(CancionesPage,{playlistID: id});
  }

}
