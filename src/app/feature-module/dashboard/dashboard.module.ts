import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { OnGoingAuditComponent } from './components/on-going-audit/on-going-audit.component';
import { PendingAuditComponent } from './components/pending-audit/pending-audit.component';
import { DashboardTableComponent } from './components/dashboard-table/dashboard-table.component';
import { DashboardStatisticsComponent } from './components/dashboard-statistics/dashboard-statistics';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../../shared/material-module/material.module';
import { FormsModule } from '@angular/forms';
import {PopoverModule} from "ngx-smart-popover";


@NgModule({
  declarations: [
    OnGoingAuditComponent,
    PendingAuditComponent,
    DashboardTableComponent,
    DashboardStatisticsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,FormsModule,PopoverModule
  ],
  exports:[
    OnGoingAuditComponent,
    PendingAuditComponent,
    DashboardTableComponent,
    DashboardStatisticsComponent,DashboardComponent
  ]
})
export class DashboardModule { }
