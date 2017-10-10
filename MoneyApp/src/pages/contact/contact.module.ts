
import { NgModule } from '@angular/core';
import { IonicPage,IonicPageModule } from 'ionic-angular';
//import { SharedModule } from '../../shared/shared.module';
import { ContactPage } from './contact';

@IonicPage()
@NgModule({
  declarations: [
    ContactPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactPage),
  //  SharedModule
  ],
  exports: [
    ContactPage
  ]
})
export class ContactPageModule {}