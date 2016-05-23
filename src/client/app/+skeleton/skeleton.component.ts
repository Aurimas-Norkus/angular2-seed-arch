import { Component } from '@angular/core';

import { TplComponent } from '../shared/tpl/index';
import { TplItem } from '../shared/objects/tlp.item';

@Component({
  moduleId: module.id,
  selector: 'skeleton',
  templateUrl: 'skeleton.component.html',
  styleUrls: ['skeleton.component.css'],
  directives: [TplComponent]
})


export class SkeletonComponent {

  public items:TplItem[] = [
    {
      tpl: 'views/skeleton/typography'
    },
    {
      tpl: 'views/skeleton/buttons'
    },
    {
      tpl: 'views/skeleton/form'
    },
    {
      tpl: 'views/skeleton/lists'
    },
    {
      tpl: 'views/skeleton/code'
    },
    {
      tpl: 'views/skeleton/tables'
    }];
}
