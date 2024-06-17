import { Component, HostListener } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  loaderActive = new BehaviorSubject(false);
  screenWidth = 0;

  constructor(public loaderServ: LoaderService) {
    this.onResize(null);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth =
      event != null ? event.target.innerWidth : window.innerWidth;
  }
}
