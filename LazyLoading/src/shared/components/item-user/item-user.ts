import { Component,Input  } from '@angular/core';

/**
 * Generated class for the ItemUserComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'item-user',
  templateUrl: 'item-user.html'
})
export class ItemUserComponent {



  @Input() user: any  = {
    picture: {},
    name: {}
  };

  constructor() {
        
  }

}
