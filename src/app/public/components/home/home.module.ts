import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, AnimateOnScrollModule],
})
export class HomeModule {}
