import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SectionService } from 'src/app/shared/services/section-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit, OnDestroy {
  isScrolled = false;
  logoSrc = 'assets/img/logo.png';
  isBlack = true;
  private sectionSubscription!: Subscription;

  constructor(
    private sectionService: SectionService,
    private router: Router
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  ngOnInit() {
    this.sectionSubscription = this.sectionService.currentSection$.subscribe(
      section => {
        if (section !== 'default') {
          this.logoSrc = 'assets/img/logo-white-nav.png';
          this.isBlack = false;
        } else {
          this.logoSrc = 'assets/img/logo.png';
          this.isBlack = true;
        }
      }
    );
  }

  ngOnDestroy() {
    if (this.sectionSubscription) {
      this.sectionSubscription.unsubscribe();
    }
  }

  isActive(link: string): boolean {
    return this.router.isActive(link, false); // Check if the current URL exactly matches the link
  }
}
