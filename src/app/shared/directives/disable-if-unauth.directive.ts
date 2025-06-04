import { Directive } from '@angular/core';

@Directive({
  selector: '[appDisableIfUnauth]',
  standalone: false
})
export class DisableIfUnauthDirective {

  constructor() { }

}
