
import { NgModule } from '@angular/core';
import { IonicPage,IonicPageModule } from 'ionic-angular';
//import { SharedModule } from '../../shared/shared.module';
import { AboutPage } from './about';

@IonicPage()
@NgModule({
  declarations: [
    AboutPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutPage),
  //  SharedModule
  ],
  exports: [
    AboutPage
  ]
})
export class ContactPageModule {}