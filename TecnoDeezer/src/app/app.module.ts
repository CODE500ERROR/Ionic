import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

/*Page personales*/

import { HomePage } from '../pages/home/home';
import { PerfilesPage } from '../pages/perfiles/perfiles';
import { ContactosPage } from '../pages/contactos/contactos';
import { AcercaPage } from '../pages/acerca/acerca';

/*Page personales*/

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PerfilesPage,
    ContactosPage,
    AcercaPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PerfilesPage,
    ContactosPage,
    AcercaPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
