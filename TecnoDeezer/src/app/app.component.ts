import { Component ,ViewChild} from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

/*Paginas personales*/
import { HomePage } from '../pages/home/home';
import { PerfilesPage } from '../pages/perfiles/perfiles';
import { ContactosPage } from '../pages/contactos/contactos';
import { AcercaPage } from '../pages/acerca/acerca';
/*Paginas personales*/

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav: Nav;

  public rootPage : any;

  public pages:Array<{titulo:string,component:any,icon:string}>;

  constructor(platform: Platform) {
    this.rootPage=HomePage;
    this.pages=[
              {titulo:'Inicio',component:HomePage,icon:'home'},
              {titulo:'Perfiles Deezer',component:PerfilesPage,icon:'person'},
              {titulo:'Contactos',component:ContactosPage,icon:'contact'},
              {titulo:'Acerca de',component:AcercaPage,icon:'information-circle'}
             ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  goToPage(page){
    this.nav.setRoot(page);
  }
}
