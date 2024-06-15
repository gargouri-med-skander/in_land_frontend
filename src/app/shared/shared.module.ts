import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { ColorChangerPipe } from './pipes/color-changer.pipe';

@NgModule({
  declarations: [LoaderComponent, ColorChangerPipe],
  imports: [CommonModule],
  exports: [ColorChangerPipe],
})
export class SharedModule {}
