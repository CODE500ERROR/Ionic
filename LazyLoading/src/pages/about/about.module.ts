import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../shared/shared.module';
import { AboutPage } from './about';
import {ItemUserComponent} from '../../shared/components/item-user/item-user';

@NgModule({
  declarations: [
    AboutPage,
    
  ],
  imports: [
    IonicPageModule.forChild(AboutPage),
    SharedModule
  ],
  exports: [
    AboutPage
  ]
})
export class AboutPageModule {}