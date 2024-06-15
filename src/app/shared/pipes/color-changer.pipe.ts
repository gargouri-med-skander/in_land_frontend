import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'colorChanger',
})
export class ColorChangerPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, keyword: string, color: string): SafeHtml {
    const re = new RegExp(keyword, 'gi');
    const transformed = value.replace(
      re,
      `<span style="color: ${color}">${keyword}</span>`
    );
    return this.sanitizer.bypassSecurityTrustHtml(transformed);
  }
}
