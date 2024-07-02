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
  logoSrc = 'assets/img/part-logo.png';
  isBlack = true;
  isHidden = false;
  lastScrollTop = 0;
  private sectionSubscription!: Subscription;

  constructor(
    private sectionService: SectionService,
    private router: Router
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > this.lastScrollTop) {
      // Scrolling down
      this.isHidden = true;
    } else {
      // Scrolling up
      this.isHidden = false;
    }

    this.isScrolled = currentScrollTop > 10;
    this.lastScrollTop = currentScrollTop;
  }

  ngOnInit() {
    this.sectionSubscription = this.sectionService.currentSection$.subscribe(
      section => {
        if (section !== 'default') {
          this.logoSrc = 'assets/img/part-logo-white.png';
          this.isBlack = false;
        } else {
          this.logoSrc = 'assets/img/part-logo.png';
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
    return this.router.isActive(link, false);
  }

  selectedFlag = 'https://media.flaticon.com/dist/min/img/flags/en.svg';
  dropdownOpen = false;

  flags = [
    {
      url: 'https://media.flaticon.com/dist/min/img/flags/en.svg',
      name: 'English',
    },
    {
      url: 'https://media.flaticon.com/dist/min/img/flags/de.svg',
      name: 'German',
    },
  ];

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectFlag(flagUrl: string) {
    this.selectedFlag = flagUrl;
    this.dropdownOpen = false;
  }

  getFilteredFlags() {
    return this.flags.filter(flag => flag.url !== this.selectedFlag);
  }
}
