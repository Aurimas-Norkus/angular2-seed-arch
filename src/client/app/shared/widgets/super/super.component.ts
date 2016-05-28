import { Component } from '@angular/core';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'super-component',
  templateUrl: 'super.component.html',
  styleUrls: ['super.component.css']
})
export class SuperComponent {
  public data:any = {
    name: 'superis'
  };
}
