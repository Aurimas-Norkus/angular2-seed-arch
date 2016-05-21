/**
 * Created by aurimasnorkus on 21/05/16.
 */
import {Component,OnInit} from '@angular/core';
import {ComponentResolver,ViewChild,ViewContainerRef} from '@angular/core';
import {FORM_DIRECTIVES} from "@angular/common";

import { IHaveDynamicData, TplComponentBuilder } from './tpl.component.builder';

@Component({
  selector: 'dynamic-holder',
  template: `
<div>
  <h1>Dynamic content holder</h1>
  <hr />
  <div #dynamicContentPlaceHolder></div>
  <hr />
  change description <input [(ngModel)]="entity.description" style="width:500px" />
</div>
`,
  providers: [TplComponentBuilder],
})
export class DynamicHolder implements OnInit {
  public entity:{ description: string };
  // reference for a <div> with #
  @ViewChild('dynamicContentPlaceHolder', {read: ViewContainerRef})
  protected dynamicComponentTarget:ViewContainerRef;

  // ng loader and our custom builder
  constructor(protected componentResolver:ComponentResolver,
              protected tplComponentBuilder:TplComponentBuilder) {
  }

  public ngOnInit() {
    // just init the entity for this example
    this.entity = {
      description: "The description of the user instance, passed as (shared) reference"
    };


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
