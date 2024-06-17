import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  loaderActive = new BehaviorSubject(false);

  setLoaderActive(value: boolean) {
    this.loaderActive.next(value);
  }
  getLoaderActive() {
    return this.loaderActive.getValue();
  }
}
