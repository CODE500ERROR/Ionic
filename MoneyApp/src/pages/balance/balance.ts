import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

//firebase
import {FirebaseListObservable } from "angularfire2/database-deprecated";

//service
import {BalanceProvider} from '../../providers/balance/balance';

@IonicPage()
@Component({
  selector: 'page-balance',
  templateUrl: 'balance.html',
})
export class BalancePage {
  
  balances: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController,public alertCrtl:AlertController, public navParams: NavParams,public balanceSvc:BalanceProvider) {
  }

  ionViewDidLoad() {
    this.balances = this.balanceSvc.getAll();
  }


  create(){
    let prompt = this.alertCrtl.create({
      title: 'Nuevo Movimiento',
      message: "Ingrese gasto/ingreso",
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
            let balance ={
              title: data.title,
              amount: data.amount,
              date:new Date().toISOString()
            }
            this.balanceSvc.create( balance );
          }
        }
      ]
    });
    prompt.present();
  }

  delete(balance, index){
    this.balanceSvc.delete(balance);
  }

  update( balance: any, index: any ){
    let prompt = this.alertCrtl.create({
      title: 'Actualizar Movimiento',
      message: "Digíte ingreso/gasto",
      inputs: [
        {
          name: 'title',
          value: balance.title,
          placeholder: 'Titulo'
        },
        {
          name: 'amount',
          value: balance.amount,
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
            balance.title = data.title;
            balance.amount=data.amount;
            this.balanceSvc.update( balance )
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
