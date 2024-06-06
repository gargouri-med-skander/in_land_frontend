import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './public/components/base-layout/base-layout.component';
import { NavBarComponent } from './shared/components/layout/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/components/layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    NavBarComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
