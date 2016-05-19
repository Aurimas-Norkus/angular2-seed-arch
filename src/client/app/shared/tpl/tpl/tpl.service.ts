import { Injectable, DynamicComponentLoader, Injector } from '@angular/core';

// todo rename service to tpl service
@Injectable()
export class TplService {

  names: string[] = [];
  test:string="test name";

  constructor(public _injector: Injector, public _dcl: DynamicComponentLoader) {}

  test(): void {
    console.log('service function', this);
  }
}

