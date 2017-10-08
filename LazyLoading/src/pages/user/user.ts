import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  
  users: any[] = [];
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public userSvc:UserProvider) {
  }

  ionViewDidLoad() {
    this.userSvc.getAll()
    .subscribe(data =>{
      this.users = data.results;
    }, error =>{
      console.error(error);
    });
  }

  goToUserDetailPage(user){
    this.navCtrl.push('UserDetailPage', {
      user: user
    });
  }



}
