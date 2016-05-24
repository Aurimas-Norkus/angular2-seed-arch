/**
 * Created by aurimasnorkus on 18/05/16.
 */
import { Component, Input } from '@angular/core';

import { TplItem } from "../interfaces/tlp.item";
import { TplService } from './tpl/tpl.service';


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
  unique: string;

  constructor(public tplService: TplService) {
  }

  ngOnInit() {
    this.unique = new Date().getTime().toString();
    let tplUrl = `app/shared/tpl/${this.value.tpl}.html`;
    this.tplService._dcl.loadAsRoot(
      compileToComponent(tplUrl, []),
      `[tpl="${this.unique}"]`,
      this.tplService._injector);
  }
}
