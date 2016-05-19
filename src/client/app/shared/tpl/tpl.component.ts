/**
 * Created by aurimasnorkus on 18/05/16.
 */
/*
 * Name: Tpl component
 * Task: Dynamic html content load and manage
 * Minimal requirement :
 * 1. Dynamic load of html - Done
 * 2. Bind to object and change view on data change - Done
 * 3. Bind to element value - todo
 * 4. Add created element object to service - todo
 * 5. Configured by json - Done
 * 6. Extend element object data with other object or function from service by name and template name - todo
 * 7. Hooks for extend service - todo
 * 8. Extend html adding required values - todo
 * 9. Dynamic load of component - todo
 * */

import { Component, Input } from '@angular/core';

import { TplItem } from "../objects/tlp.item";
import { TplService } from './tpl/tpl.service';


function compileToComponent(templateUrl, directives, bindData) {
  console.log(templateUrl, directives, bindData);
  @Component({
    selector: 'fake',
    template: "<div>{{test}}</div>",
    directives
  })
  class FakeComponent {
    data:any;
    test:string='opa';
    constructor(public tplService:TplService){
      this.data = bindData;
      //this.test = tplService.test;
      console.log('fake', this);
    }
  }
  return FakeComponent;
}

let templ = () => {
  console.log('templ',this);
  return 'tpl.component.html';
}

@Component({
  moduleId: module.id,
  selector: 'tpl',
  templateUrl: templ(),
  styleUrls: ['tpl.component.css']
})



export class TplComponent {
  @Input() value:TplItem;
  unique:string;
  test:string="Labas";

  constructor(public tplService:TplService) {
  }

  ngOnInit() {
    this.unique = new Date().getTime().toString();
    let tplUrl = `app/shared/tpl/${this.value.tpl}.html`;
    this.tplService._dcl.loadAsRoot(
      compileToComponent(tplUrl, [], this.value),
      `[tpl="${this.unique}"]`,
      this.tplService._injector);
  }
}
