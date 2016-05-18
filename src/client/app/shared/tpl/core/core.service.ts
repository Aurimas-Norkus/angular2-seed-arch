import { Injectable, DynamicComponentLoader, Injector } from '@angular/core';


@Injectable()
export class CoreService {

  names: string[] = [];

  constructor(public _injector: Injector, public _dcl: DynamicComponentLoader) {}

  test(): void {
    console.log('service function', this);
  }
}

