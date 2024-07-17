import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SectionService } from 'src/app/shared/services/section-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  screenWidth!: number;
  isScrolled = false;
  logoSrc = 'assets/img/part-logo.png';
  isBlack = true;
  isHidden = false;
  lastScrollTop = 0;
  isServiceVisible = false;
  isMarketVisible = false;
  isIndustrieVisible = false;
  isBenefitVisible = false;
  isAboutUsVisible = false;
  worldMapSrc = 'assets/img/markets/market.png';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.onResize(null);
  }

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

  isActive(link: string): boolean {
    return this.router.isActive(link, false);
  }

  selectedFlag = 'assets/SVG/flag-for-flag-united-kingdom-svgrepo-com.svg';
  dropdownOpen = false;

  flags = [
    {
      url: 'assets/SVG/flag-for-flag-united-kingdom-svgrepo-com.svg',
      name: 'English',
    },
    {
      url: 'assets/SVG/flag-for-flag-germany-svgrepo-com.svg',
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

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth =
      event != null ? event.target.innerWidth : window.innerWidth;
  }

  onMouseEnter(link: string) {
    if (link === 'services') {
      this.isServiceVisible = true;
    }
    if (link === 'markets') {
      this.isMarketVisible = true;
    }
    if (link === 'industries') {
      this.isIndustrieVisible = true;
    }
    if (link === 'benefits') {
      this.isBenefitVisible = true;
    }
    if (link === 'about-us') {
      this.isAboutUsVisible = true;
    }
  }

  onMouseLeave(link: string) {
    if (link === 'services') {
      this.isServiceVisible = false;
    }
    if (link === 'markets') {
      this.isMarketVisible = false;
    }
    if (link === 'industries') {
      this.isIndustrieVisible = false;
    }
    if (link === 'benefits') {
      this.isBenefitVisible = false;
    }
    if (link === 'about-us') {
      this.isAboutUsVisible = false;
    }
  }

  onMouseMarket(market: string) {
    if (market === 'europe') {
      this.worldMapSrc = 'assets/img/markets/europe-market.png';
    }
    if (market === 'MEA') {
      this.worldMapSrc = 'assets/img/markets/MEA-market.png';
    }
    if (market === 'Asia-Pacific') {
      this.worldMapSrc = 'assets/img/markets/asia-pacific-market.png';
    }
    if (market === 'North America') {
      this.worldMapSrc = 'assets/img/markets/north-america-market.png';
    }
    if (market === 'Latin America') {
      this.worldMapSrc = 'assets/img/markets/latin-america-market.png';
    }
  }

  onMouseMarketLeave() {
    this.worldMapSrc = 'assets/img/markets/market.png';
  }
}
