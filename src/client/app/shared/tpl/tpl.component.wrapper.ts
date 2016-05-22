/**
 * Created by aurimasnorkus on 22/05/16.
 */
/*
 * Wrapper for using multiple tpl components and they will be nested
 * */
import {Component} from '@angular/core';

import { TplComponent } from './tpl.component';

@Component({
  selector: 'tplWrap',
  templateUrl: 'app/shared/tpl/tpl.component.wrap.html'
})
export class TplComponentWrapper {
  //---------------------------------------------------------
  constructor() {
  }

  //---------------------------------------------------------
  public ngOnInit() {

  }
}
