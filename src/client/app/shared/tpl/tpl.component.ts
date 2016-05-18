/**
 * Created by aurimasnorkus on 18/05/16.
 */
import { Component, Input } from '@angular/core';

import {TplItem} from "../objects/tlp.item";
import { TplItem } from '../objects/tlp.item';

@Component({
  moduleId: module.id,
  selector: 'tpl',
  templateUrl: 'tpl.component.html',
  styleUrls: ['tpl.component.css']
})
/**
 * This class represents the toolbar component.
 */
export class TplComponent {
  @Input() value: TplItem;

  constructor(){
    console.log('constructor',this.value);
  }

  ngOnInit(){
    console.log('on init',this.value);
  }
}
