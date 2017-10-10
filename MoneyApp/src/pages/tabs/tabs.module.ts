
import { NgModule } from '@angular/core';
import { IonicPage,IonicPageModule } from 'ionic-angular';
//import { SharedModule } from '../../shared/shared.module';
import { TabsPage } from './tabs';

@IonicPage()
@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
  //  SharedModule
  ],
  exports: [
    TabsPage
  ]
})
export class ContactPageModule {}