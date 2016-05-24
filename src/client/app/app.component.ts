import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { HTTP_PROVIDERS} from '@angular/http';

import { AboutComponent } from './+about/index';
import { HomeComponent } from './+home/index';
import { ArchitectComponent } from './+architect/index';
import { StyleguideComponent } from './+styleguide/index';
import { SkeletonComponent } from './+skeleton/index';
import { NavbarComponent, TplService } from './shared/index';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  viewProviders: [HTTP_PROVIDERS, TplService],
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent]
})
@Routes([
  {
    path: '/architecture',
    component: ArchitectComponent
  },
  {
    path: '/styleguide',
    component: StyleguideComponent
  },
  {
    path: '/skeleton',
    component: SkeletonComponent
  }
])
export class AppComponent {
  constructor(public tplService:TplService) {

  }

  ngOnInit() {
    console.log('App starts', this);
    this.tplService.init();
  }
}
