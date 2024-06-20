import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SectionService {
  private currentSectionSubject = new BehaviorSubject<string>('default');
  currentSection$ = this.currentSectionSubject.asObservable();

  setCurrentSection(section: string) {
    this.currentSectionSubject.next(section);
  }
}
