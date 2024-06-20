import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { SectionService } from 'src/app/shared/services/section-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  screenWidth!: number;
  leftPercentage = 14.5;
  partners: any[] = [];
  responsiveOptions: any[] | undefined;
  constructor(
    private loader: LoaderService,
    private sectionService: SectionService
  ) {}

  ngOnInit(): void {
    this.partners = [
      {
        name: 'partner1',
        image: 'partner1.png',
      },
      {
        name: 'partner2',
        image: 'partner2.png',
      },
      {
        name: 'partner3',
        image: 'partner3.png',
      },
      {
        name: 'partner4',
        image: 'partner4.png',
      },
      {
        name: 'partner1',
        image: 'partner1.png',
      },
      {
        name: 'partner2',
        image: 'partner2.png',
      },
      {
        name: 'partner3',
        image: 'partner3.png',
      },
      {
        name: 'partner4',
        image: 'partner4.png',
      },
      {
        name: 'partner1',
        image: 'partner1.png',
      },
      {
        name: 'partner2',
        image: 'partner2.png',
      },
      {
        name: 'partner3',
        image: 'partner3.png',
      },
      {
        name: 'partner4',
        image: 'partner4.png',
      },
      {
        name: 'partner1',
        image: 'partner1.png',
      },
      {
        name: 'partner2',
        image: 'partner2.png',
      },
      {
        name: 'partner3',
        image: 'partner3.png',
      },
      {
        name: 'partner4',
        image: 'partner4.png',
      },
    ];
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
    this.loader.setLoaderActive(false);
    setTimeout(() => {
      this.loader.setLoaderActive(false);
    }, 1000);
    this.onResize(null);
    this.calculateLeftPercentage();
  }

  private calculateLeftPercentage() {
    const firstTwoDigits = Math.floor(this.screenWidth / 100);
    const lastDigit = firstTwoDigits % 10;

    if (lastDigit % 3 === 0) {
      this.leftPercentage = 8.5 + firstTwoDigits;
    } else {
      this.leftPercentage = 11.5 + firstTwoDigits;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth =
      event != null ? event.target.innerWidth : window.innerWidth;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const windowHeight = window.innerHeight;
    const scrollHeight = 1.2 * windowHeight;
    const scrollFraction = scrollTop / scrollHeight;

    const translateXValue: number = -scrollFraction * (this.screenWidth / 1.5);
    const rotateValue = scrollFraction * 360 + 225;
    const animatedElement = document.querySelector(
      '.part-logo-img'
    ) as HTMLElement;
    const animatedFullElement = document.querySelector(
      '.full-logo-img'
    ) as HTMLElement;
    const animatedTitleElement = document.querySelector(
      '.under-logo-title'
    ) as HTMLElement;

    if (rotateValue <= 373) {
      animatedElement.style.transform = `translateX(${translateXValue / 2}px) rotate(${rotateValue}deg)`;
    }
    if (rotateValue > 356) {
      animatedFullElement.style.transform = 'none';
    } else {
      animatedFullElement.style.opacity = '1';
      animatedFullElement.style.transform = `translateX(calc(${translateXValue * 1.4}px + ${this.screenWidth / 2}px))`;
    }

    if (rotateValue === 270) {
      animatedElement.style.transform = `translateX(${translateXValue}px) rotate(${rotateValue}deg)`;
    }
    if (rotateValue > 280) {
      if (rotateValue > 300) {
        animatedTitleElement.classList.remove('fadeoutzoom');
        animatedTitleElement.classList.add('fadeinzoom');
      }
    } else {
      animatedFullElement.style.opacity = '0';
      animatedTitleElement.classList.remove('fadeinzoom');
      animatedTitleElement.classList.add('fadeoutzoom');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const containerStrategie = document.getElementById('strategie-container');
    if (!containerStrategie) return;
    const containerPartners = document.getElementById('partners-container');
    if (!containerPartners) return;
    const scrollTop = window.scrollY;
    const strategieContainerTop = containerStrategie.offsetTop;
    const partnersContainerTop = containerPartners.offsetTop;

    if (
      (scrollTop >= strategieContainerTop &&
        scrollTop < strategieContainerTop + containerStrategie.scrollHeight) ||
      (scrollTop >= partnersContainerTop &&
        scrollTop < partnersContainerTop + containerPartners.scrollHeight)
    ) {
      this.sectionService.setCurrentSection('change');
    } else {
      this.sectionService.setCurrentSection('default');
    }
  }
}
