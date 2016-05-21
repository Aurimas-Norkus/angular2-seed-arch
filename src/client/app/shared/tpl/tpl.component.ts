/**
 * Created by aurimasnorkus on 21/05/16.
 */
import {Component,OnInit,Input} from '@angular/core';
import {ComponentResolver,ViewChild,ViewContainerRef} from '@angular/core';
import {FORM_DIRECTIVES} from "@angular/common";

import { IHaveDynamicData, TplComponentBuilder } from './tpl.component.builder';
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
              protected tplComponentBuilder:TplComponentBuilder) {
  }

  public ngOnInit() {
    console.log('Data to component', this);
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

          component.data = this.data;
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
