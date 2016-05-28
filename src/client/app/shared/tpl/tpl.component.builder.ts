/**
 * Created by aurimasnorkus on 18/05/16.
 */
import { Component } from '@angular/core';

import { TplItem } from "../interfaces/tlp.item";
import { TplService } from './tpl.service';
import { TplComponent } from './tpl.component';

export class TplComponentBuilder {
  //---------------------------------------------------------
  public CreateComponentLocal(unique, tpl:string, injectDirectives:any[]):any {

    @Component({
      moduleId: module.id,
      selector: 'dynamic-component' + unique,
      templateUrl: `../${tpl}.html`,
      directives: injectDirectives,
    })
    class CustomDynamicComponent {
      public data:TplItem;

      constructor(){}
    }

    return CustomDynamicComponent;
  }
}
