import { Injectable} from '@angular/core';

@Injectable()
export class TplService {

  public tpl:any = {};

  constructor() {
  }

  init() {
    console.log('Tpl service init', this);
    window.tpl = this;
  }
}
