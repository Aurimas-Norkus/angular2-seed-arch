import { Component } from '@angular/core';

import { TplComponent } from '../shared/tpl/index';
import { TplItem } from '../shared/interfaces/tlp.item';

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
      tpl:'super-component'
    },
    {
      tpl: 'views/common/input',
      type: 'text',
      name: 'architect.name',
      placeholder: 'Enter name',
      title: 'User Name',
      disabled: false,
      children: [
        {
          name: 'button',
          tpl: 'views/common/buttons/button',
          children: [
            {
              name: 'Super',
              tpl: 'views/common/buttons/button',
              children: [
                {
                  name: 'button',
                  tpl: 'views/common/buttons/button',
                  children: [
                    {
                      name: 'button',
                      tpl: 'views/common/buttons/button'
                    }
                  ]
                },
                {
                  name: 'button',
                  tpl: 'views/common/buttons/button'
                }
              ]
            }
          ]
        },
        {
          name: 'button',
          tpl: 'views/common/buttons/button'
        }
      ]
    },
    {
      tpl: 'views/common/input',
      type: 'password',
      name: 'architect.pass',
      placeholder: 'Enter pass',
      title: 'User Pass',
      disabled: false,
      children: [
        {
          name: 'button',
          tpl: 'views/common/buttons/button'
        }
      ]
    }];

  // test to see if change will be see after time
  change() {
    setTimeout(() => {
      this.items[0].name = 'new title';
      //console.log('timeout');
    }, 5000);
  }

  // init component, executed before rendering
  ngOnInit() {
    //this.change();
  }

}
