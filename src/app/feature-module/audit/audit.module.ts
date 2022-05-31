import { MaterialModule } from '../../shared/material-module/material.module';
import { CoreModule } from './../../core/core.module';
import { AuditRoutingModule } from './audit-routing.module';
import { AuditListComponent } from './audit-list/audit-list.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AuditListComponent
  ],
  imports: [
    CommonModule,
    AuditRoutingModule,
    CoreModule,
    MaterialModule
  ],
  exports:[
    CommonModule
  ]
})
export class AuditModule { }
