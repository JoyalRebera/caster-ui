import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModuleRoutingModule } from './feature-module-routing.module';
import { FeatureModuleComponent } from './feature-module.component';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../shared/material-module/material.module';


@NgModule({
  declarations: [
    FeatureModuleComponent,
  ],
  imports: [
    CommonModule,
    FeatureModuleRoutingModule,
    MaterialModule,
    CoreModule
  ],
  exports: [
  ]
})
export class FeatureModuleModule { }
