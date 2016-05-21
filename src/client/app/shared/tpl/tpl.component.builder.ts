/**
 * Created by aurimasnorkus on 18/05/16.
 */
import { Component } from '@angular/core';

import { TplItem } from "../objects/tlp.item";
import { TplService } from './tpl/tpl.service';


export interface IHaveDynamicData {
  name?: string
  entity?: { description: string }
}

export class TplComponentBuilder {

  public CreateTemplate() {
    let template = `
      <div>
          <h3>Dynamic component</h3>

          with dynamic data:
          <dl>
            <dt>string value 'name'</dt>
            <dd><b>{{name}}</b></dd>
            <dt>reference value 'entity' and its 'description'</dt>
            <dd><b>{{entity?.description}}</b></dd>
          </dl>
      </div>`;

    return template;
  }

  //---------------------------------------------------------
  public CreateComponent(tpl:string, injectDirectives:any[]):any {

    @Component({
      selector: 'dynamic-component',
      template: tpl,
      directives: injectDirectives,
    })
    class CustomDynamicComponent implements IHaveDynamicData {

      public name:string;
      public entity:{ description: string };
    }

    return CustomDynamicComponent;
  }
  //---------------------------------------------------------
  public CreateComponentLocal(tpl:string, injectDirectives:any[]):any {

    @Component({
      selector: 'dynamic-component',
      templateUrl: `app/shared/tpl/${tpl}.html`,
      directives: injectDirectives,
    })
    class CustomDynamicComponent implements IHaveDynamicData {

      public name:string;
      public entity:{ description: string };
    }

    return CustomDynamicComponent;
  }
}
