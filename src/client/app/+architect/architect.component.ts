import { Component } from '@angular/core';

import { TplComponent,  } from '../shared/tpl/index';
import { TplItem } from '../shared/objects/tlp.item';

@Component({
  moduleId: module.id,
  selector: 'architect',
  templateUrl: 'architect.component.html',
  styleUrls: ['architect.component.css'],
  directives: [TplComponent]
})


export class ArchitectComponent {

  public items:TplItem[] = [
    {
      name: 'title',
      tpl: 'views/title'
    },
    {
      name: 'input',
      tpl: 'views/input'
    },
    {
      name: 'button',
      tpl: 'views/button'
    },];

  // test to see if change will be see after time
  change() {
    setTimeout(() => {
      this.items[0].name = 'new title';
    }, 5000);

  }

  // init component, executed before rendering
  ngOnInit() {
    this.change();
  }

}
