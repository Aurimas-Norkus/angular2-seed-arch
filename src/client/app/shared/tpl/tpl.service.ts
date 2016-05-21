import { Injectable} from '@angular/core';

@Injectable()
export class TplService {

  public tpl:any = {};

  public extend:any = {
    byName: {
      'architect.input': {
        init: () => {
          console.log('Init of input element');
        },
        data: {
          testByName: 'ex by name',
          testObject: {}
        }
      }
    },
    byTemplate: {
      'common/input/input': {
        data:{
          testByTemplate:'ex by tpl'
        }
      }
    }
  };

  constructor() {
  }

  init() {
    console.log('Tpl service init', this);
    window.tpl = this;
  }
}
