import { FeatureModuleComponent } from './feature-module.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: FeatureModuleComponent,
    children: [{ path: '', component: DashboardComponent },
    {
      path: 'audit-list', loadChildren: () =>
        import('./audit/audit.module').then(module => module.AuditModule)
    },
    {
      path: 'profile', loadChildren: () => import('./user-profile/user-profile.module')
        .then(module => module.UserProfileModule)
    }
    ]
  },
   


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureModuleRoutingModule { }
