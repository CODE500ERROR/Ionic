import { NgModule } from '@angular/core';
import { IonicPage,IonicPageModule } from 'ionic-angular';
//import { SharedModule } from '../../shared/shared.module';
import { HomePage } from './home';

@IonicPage()
@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  //  SharedModule
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}