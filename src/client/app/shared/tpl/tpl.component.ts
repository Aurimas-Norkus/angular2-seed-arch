/**
 * Created by aurimasnorkus on 21/05/16.
 */
/*
 * Name: Tpl component
 * Task: Dynamic html content load and manage
 * Minimal requirement :
 * 1. Dynamic load of html - Done
 * 2. Bind to object and change view on data change - Done
 * 3. Bind to element value - Done
 * 4. Add created element object to service - Done
 * 5. Configured by json - Done
 * 6. Extend element object data with other object or function from service by name and template name - Done
 * 7. Hooks for extend service - Done
 * 8. Extend html adding required values - todo
 * 9. Dynamic load of component - todo
 * 10. Child using tpl component - todo
 * */

import {Component,OnInit,Input} from '@angular/core';
import {ComponentResolver,ViewChild,ViewContainerRef} from '@angular/core';
import {FORM_DIRECTIVES} from "@angular/common";

import { TplComponentBuilder } from './tpl.component.builder';
import { TplService } from './tpl.service';
import { TplItem } from "../objects/tlp.item";

@Component({
  selector: 'tpl',
  templateUrl: 'app/shared/tpl/tpl.component.html',
  providers: [TplComponentBuilder],
  styleUrls: ['app/shared/tpl/tpl.component.css']
})
export class TplComponent implements OnInit {
  @Input() data:TplItem;
  //---------------------------------------------------------
  // reference for a <div> with #
  @ViewChild('dynamicContentPlaceHolder', {read: ViewContainerRef})
  protected dynamicComponentTarget:ViewContainerRef;
  //---------------------------------------------------------
  // ng loader and our custom builder
  constructor(protected componentResolver:ComponentResolver,
              protected tplComponentBuilder:TplComponentBuilder,
              protected tplService:TplService) {
  }
  //---------------------------------------------------------
  public ngOnInit() {
    //---------------------------------------------------------
    let createComponent = (data) => {
      // now we get built component, just to load it
      let dynamicComponent = this.tplComponentBuilder.CreateComponentLocal(new Date().getTime().toString(), data.tpl, FORM_DIRECTIVES);
      //---------------------------------------------------------
      // we have a component and its target
      this.componentResolver
        .resolveComponent(dynamicComponent)
        .then((factory:ng.ComponentFactory<TplItem>) => {
          // Instantiates a single {@link Component} and inserts its Host View
          //   into this container at the specified `index`
          let dynamicComponent = this.dynamicComponentTarget.createComponent(factory, 0);
          console.log(dynamicComponent.instance);
          //---------------------------------------------------------
          // and here we have access to our dynamic component
          let component:TplItem = dynamicComponent.instance;
          //---------------------------------------------------------
          // working with data, extending
          if (data.name) Object.assign(data, this.tplService.extend.byName[data.name]);
          if (data.tpl) Object.assign(data, this.tplService.extend.byTemplate[data.tpl]);
          //---------------------------------------------------------
          // Add extended and element data to component
          component.data = data;
          //---------------------------------------------------------
          // Add component data to service
          if (data.name) this.tplService.tpl[data.name] = data;
          //---------------------------------------------------------
          // Hooks
          if (data.init) data.init();
        });
    };
    //---------------------------------------------------------
    createComponent(this.data);
  }
  //---------------------------------------------------------
  log() {
    console.log(`Debug ${this.data.tpl}`, this.data);
  }
}
