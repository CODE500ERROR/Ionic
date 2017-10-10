import { Component } from '@angular/core';
import { NavController,IonicPage ,AlertController} from 'ionic-angular';

//firebase
import {FirebaseListObservable } from "angularfire2/database-deprecated";

//servicios
import {WalletProvider} from '../../providers/wallet/wallet';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  wallets: FirebaseListObservable<any>;
  constructor(
              public navCtrl: NavController,
              public walletSvc: WalletProvider,
              public alertCtrl:AlertController) 
  {}
  
  ionViewDidLoad() {
    this.wallets = this.walletSvc.getAll();
  }

  goToDetail(){
    this.navCtrl.push('BalancePage', {
      //user: user
    });
  }


  create(){
    let prompt = this.alertCtrl.create({
      title: 'Nueva Billetera',
      message: "Ingrese nueva billetera",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
        {
          name: 'amount',
          placeholder: 'Amount'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            
          }
        },
        {
          text: 'Aceptar',
          handler: data => {
            let wallet ={
              title: data.title,
              amount: data.amount,
              date:new Date().toISOString()
            }
            this.walletSvc.create( wallet );
          }
        }
      ]
    });
    prompt.present();
  }

  delete(wallet, index){
    this.walletSvc.delete(wallet);
  }

  update( wallet: any, index: any ){
    let prompt = this.alertCtrl.create({
      title: 'Actualizar Billetera',
      message: "Digite la nueva billetera",
      inputs: [
        {
          name: 'title',
          value: wallet.title,
          placeholder: 'Titulo'
        },
        {
          name: 'amount',
          value: wallet.amount,
          placeholder: 'Monto'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            
          }
        },
        {
          text: 'Aceptar',
          handler: data => {
            wallet.title = data.title;
            wallet.amount=data.amount;
            this.walletSvc.update( wallet )
            .catch(error =>{
              console.error( error );
            });
          }
        }
      ]
    });
    prompt.present();
  }

}
