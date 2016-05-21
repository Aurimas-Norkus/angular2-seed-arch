import { Component } from '@angular/core';

import { TplComponent } from '../shared/tpl/index';
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
      tpl: 'views/common/input',
      type: 'text',
      name: 'architect.input',
      placeholder: 'Enter name',
      title: 'User Name',
      disabled: false
    },
    {
      tpl: 'views/title',
      name: 'title',
      title: 'Title Opa'
    },
    {
      name: 'input',
      tpl: 'views/input'
    },
    {
      name: 'button',
      tpl: 'views/button'
    },
    {
      name: 'Default ',
      tpl: 'default'
    }];

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
