import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

//servicios
import { WalletProvider } from '../providers/wallet/wallet';
import { BalanceProvider } from '../providers/balance/balance';

const firebaseConfig={
  apiKey: "AIzaSyCpGDcqE766mKM0r5cRFvjy8_QSBeyImCI",
  authDomain: "moneyapp-9738b.firebaseapp.com",
  databaseURL: "https://moneyapp-9738b.firebaseio.com",
  projectId: "moneyapp-9738b",
  storageBucket: "moneyapp-9738b.appspot.com",
  messagingSenderId: "604344587319"
}




@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig,'MoneyApp'),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WalletProvider,
    BalanceProvider
  ]
})
export class AppModule {}
