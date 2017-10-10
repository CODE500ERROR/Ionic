import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FirebaseListObservable, AngularFireDatabase  } from "angularfire2/database-deprecated";
import 'rxjs/add/operator/map';

@Injectable()
export class BalanceProvider {

  balances: FirebaseListObservable<any>;

  constructor(public http: Http,public fireDatabase: AngularFireDatabase) {
    this.balances= this.fireDatabase.list('/balances'); //inicializamos para indicarle que vamos a estar escuchando a una base de datos 
  }

  getAll(){
    return this.balances;
  }

  create(balance: any){
    return this.balances.push( balance );
  }

  delete(balance: any){
    return this.balances.remove( balance.$key );
  }

  update(balance: any){
    return this.balances.update(balance.$key, { //$key es un atributo que firebase lo agrega como identificador
      title: balance.title,
      amount: balance.amount
    });
  }

}
