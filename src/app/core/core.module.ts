import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../shared/material-module/material.module';
import { FeatureModuleModule } from '../feature-module/feature-module.module';

@NgModule({
  declarations: [
    SideBarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [
    NavbarComponent,
    SideBarComponent
  ]
})
export class CoreModule { }
