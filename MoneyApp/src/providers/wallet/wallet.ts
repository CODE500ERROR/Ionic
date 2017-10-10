import { Injectable } from '@angular/core';

import { FirebaseListObservable, AngularFireDatabase  } from "angularfire2/database-deprecated";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WalletProvider {

  wallets: FirebaseListObservable<any>;

  constructor(public http: Http,public fireDatabase: AngularFireDatabase) {
    this.wallets = this.fireDatabase.list('/wallets'); //inicializamos para indicarle que vamos a estar escuchando a una base de datos 
  }

  getAll(){
    return this.wallets;
  }

  create(wallet: any){
    return this.wallets.push( wallet );
  }

  update(wallet: any){
    return this.wallets.update(wallet.$key, { //$key es un atributo que firebase lo agrega como identificador
      title: wallet.title,
      amount: wallet.amount
    });
  }

  delete(task: any){
    return this.wallets.remove( task.$key );
  }

}
