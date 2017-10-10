
import { NgModule } from '@angular/core';
import { IonicPage,IonicPageModule } from 'ionic-angular';
//import { SharedModule } from '../../shared/shared.module';
import { BalancePage } from './balance';

@IonicPage()
@NgModule({
  declarations: [
    BalancePage,
  ],
  imports: [
    IonicPageModule.forChild(BalancePage),
  //  SharedModule
  ],
  exports: [
    BalancePage
  ]
})

export class BalancePageModule {}
