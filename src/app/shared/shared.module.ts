import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorChangerPipe } from './pipes/color-changer.pipe';

@NgModule({
  declarations: [ColorChangerPipe],
  imports: [CommonModule],
  exports: [ColorChangerPipe],
})
export class SharedModule {}
