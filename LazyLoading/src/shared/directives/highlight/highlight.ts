import { Directive,ElementRef  } from '@angular/core';

/**
 * Generated class for the HighligthDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[highlight]' // Attribute selector
})
export class HighlightDirective {

  constructor(public element: ElementRef) {
    //This is only example for set backgroundColor is better with css
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }
}
