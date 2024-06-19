import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselModule } from 'primeng/carousel';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AnimateOnScrollModule,
    SharedModule,
    CarouselModule,
  ],
})
export class HomeModule {}
