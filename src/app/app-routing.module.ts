import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './core/routes/routes';
import { BaseLayoutComponent } from './public/components/base-layout/base-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: APP_ROUTES.HOME,
    pathMatch: 'full',
  },
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: APP_ROUTES.HOME,
        loadChildren: () =>
          import(
            './public/components/home/home.module'
          ).then((m) => m.HomeModule),
      },
      {
        path: APP_ROUTES.BENEFITS,
        loadChildren: () =>
          import(
            './public/components/benefits/benefits.module'
          ).then((m) => m.BenefitsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
