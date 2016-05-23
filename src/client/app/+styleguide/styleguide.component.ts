import { Component } from '@angular/core';

import { TplComponent } from '../shared/tpl/index';
import { TplItem } from '../shared/objects/tlp.item';

@Component({
  moduleId: module.id,
  selector: 'styleguide',
  templateUrl: 'styleguide.component.html',
  styleUrls: ['styleguide.component.css'],
  directives: [TplComponent]
})


export class StyleguideComponent {

  public items:TplItem[] = [
    {
      tpl: 'views/common/layout/styleguide-element',
      children: [
        {
          tpl: 'views/common/inputs/input',
          type: 'text',
          name: 'architect.name',
          placeholder: 'Enter name',
          title: 'User Name',
          disabled: false
        }
      ]
    },
    {
      tpl: 'views/common/layout/styleguide-element',
      children: [
        {
          tpl: 'views/common/buttons/button',
          type: 'password',
          name: 'architect.pass',
          placeholder: 'Enter pass',
          title: 'User Pass',
          disabled: false
        }
      ]
    }];
}
