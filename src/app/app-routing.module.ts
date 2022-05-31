import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/login/login-guard/auth-guard';

const routes: Routes = [
  {
    path: '', loadChildren: () =>
      import('./feature-module/feature-module.module')
        .then(f =>  f.FeatureModuleModule ),canActivate: [AuthGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
