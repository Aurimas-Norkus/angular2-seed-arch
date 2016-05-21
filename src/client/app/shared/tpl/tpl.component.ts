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

import { IHaveDynamicData, TplComponentBuilder } from './tpl.component.builder';
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
  public entity:{ description: string };
  // reference for a <div> with #
  @ViewChild('dynamicContentPlaceHolder', {read: ViewContainerRef})
  protected dynamicComponentTarget:ViewContainerRef;

  // ng loader and our custom builder
  constructor(protected componentResolver:ComponentResolver,
              protected tplComponentBuilder:TplComponentBuilder,
              protected tplService:TplService) {
  }

  public ngOnInit() {
    //console.log('Data to component', this);
    // just init the entity for this example
    this.entity = {
      description: "The description of the user instance, passed as (shared) reference"
    };

    if (this.data.tpl !== 'default') {
      // dynamic template built (TODO driven by some incoming settings)
      //var template = this.tplComponentBuilder.CreateTemplate();

      // now we get built component, just to load it
      var dynamicComponent = this.tplComponentBuilder.CreateComponentLocal(this.data.tpl, FORM_DIRECTIVES);

      // we have a component and its target
      this.componentResolver
        .resolveComponent(dynamicComponent)
        .then((factory:ng.ComponentFactory<IHaveDynamicData>) => {

          // Instantiates a single {@link Component} and inserts its Host View
          //   into this container at the specified `index`
          let dynamicComponent = this.dynamicComponentTarget.createComponent(factory, 0);

          // and here we have access to our dynamic component
          let component:IHaveDynamicData = dynamicComponent.instance;

          // working with data, extending
          if(this.data.name) Object.assign(this.data, this.tplService.extend.byName[this.data.name]);
          if(this.data.tpl) Object.assign(this.data, this.tplService.extend.byTemplate[this.data.tpl]);

          component.data = this.data;

          // Add component data to service
          if(this.data.name) this.tplService.tpl[this.data.name] = this.data;

          // Hooks
          if(this.data.init) this.data.init();

        });
    } else {
      // dynamic template built (TODO driven by some incoming settings)
      var template = this.tplComponentBuilder.CreateTemplate();

      // now we get built component, just to load it
      var dynamicComponent = this.tplComponentBuilder.CreateComponent(template, FORM_DIRECTIVES);

      // we have a component and its target
      this.componentResolver
        .resolveComponent(dynamicComponent)
        .then((factory:ng.ComponentFactory<IHaveDynamicData>) => {

          // Instantiates a single {@link Component} and inserts its Host View
          //   into this container at the specified `index`
          let dynamicComponent = this.dynamicComponentTarget.createComponent(factory, 0);

          // and here we have access to our dynamic component
          let component:IHaveDynamicData = dynamicComponent.instance;

          component.name = "The name passed to component as a value";
          component.entity = this.entity;
        });
    }
  }

  log() {
    console.log(`Debug ${this.data.tpl}`, this.data);
  }
}
