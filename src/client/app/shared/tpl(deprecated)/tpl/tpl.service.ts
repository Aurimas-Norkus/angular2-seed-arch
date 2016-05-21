import { Injectable, DynamicComponentLoader, Injector } from '@angular/core';

// todo rename service to tpl service
@Injectable()
export class TplService {

  names: string[] = [];

  constructor(public _injector: Injector, public _dcl: DynamicComponentLoader) {}

  test(): void {
    console.log('service function', this);
  }
}

