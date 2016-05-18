/**
 * Created by aurimasnorkus on 18/05/16.
 */
import { Component, Input} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';

import {TplItem} from "../objects/tlp.item";
import { CoreService } from './core/core.service';


function compileToComponent(templateUrl, directives) {
  @Component({
    selector: 'fake',
    templateUrl, directives
  })
  class FakeComponent {}
  return FakeComponent;
}

@Component({
  moduleId: module.id,
  selector: 'tpl',
  templateUrl: 'tpl.component.html',
  styleUrls: ['tpl.component.css']
})

export class TplComponent {
  @Input() value:TplItem;

  constructor(public coreService: CoreService) {
    console.log('constructor', this.value);
  }

  ngOnInit() {
    console.log('on init', this.value, this.coreService.test());
    let tplUrl = `app/shared/tpl/${this.value.tpl}.html`;
    this.coreService._dcl.loadAsRoot(
      compileToComponent(tplUrl, []),
      '[tpl]',
      this.coreService._injector);
  }
}
