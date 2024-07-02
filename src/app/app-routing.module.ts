import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './core/routes/routes';
import { BaseLayoutComponent } from './public/components/base-layout/base-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./public/components/home/home.module').then(
            m => m.HomeModule
          ),
      },
      {
        path: APP_ROUTES.BENEFITS,
        loadChildren: () =>
          import('./public/components/benefits/benefits.module').then(
            m => m.BenefitsModule
          ),
      },
      {
        path: APP_ROUTES.SERVICES,
        loadChildren: () =>
          import('./public/components/services/services.module').then(
            m => m.ServicesModule
          ),
      },
      {
        path: APP_ROUTES.MARKETS,
        loadChildren: () =>
          import('./public/components/markets/markets.module').then(
            m => m.MarketsModule
          ),
      },
      {
        path: APP_ROUTES.INDUSTRIES,
        loadChildren: () =>
          import('./public/components/industries/industries.module').then(
            m => m.IndustriesModule
          ),
      },
      {
        path: APP_ROUTES.ABOUT_US,
        loadChildren: () =>
          import('./public/components/about-us/about-us.module').then(
            m => m.AboutUsModule
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
