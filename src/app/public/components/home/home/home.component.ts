import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { SectionService } from 'src/app/shared/services/section-service.service';
import { slideInOutAnimation } from '../slide-animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [slideInOutAnimation],
})
export class HomeComponent implements OnInit {
  activeIndex = 0;
  videoSrc = 'assets/video/InLandVideo.mp4';
  isMuted = true;
  screenWidth!: number;
  leftPercentage = 14.5;
  partners: any[] = [];
  responsiveOptions: any[] | undefined;
  carouselItems = [
    {
      image: 'assets/img/service1.jpg',
      title: 'Outbound Lead Generation',
      description: 'Engage potential clients with precision outreach.',
    },
    {
      image: 'assets/img/service2.jpg',
      title: 'Account-based Marketing',
      description: 'Tailored marketing for top accounts.',
    },
    {
      image: 'assets/img/service3.jpg',
      title: 'Inbound Sales Development',
      description: 'Attract and nurture leads with strategic content.',
    },
    {
      image: 'assets/img/service4.jpg',
      title: 'B2B Sales & Marketing Consultancy',
      description: 'Strategic insights to elevate your marketing efforts.',
    },
    {
      image: 'assets/img/service5.jpg',
      title: 'Referral and Affiliate Marketing',
      description: 'Expand your reach through trusted recommendations.',
    },
  ];
  whyChooseInland = [
    {
      icon: 'bi bi-arrow-up-right',
      title: 'About us',
      description:
        'We simplify financial products and support growth with personalized IT solutions and expertise.',
    },
    {
      icon: 'bi bi-lightning-charge',
      title: 'fast',
      description:
        'Business plan elegantly transforms sublimated pool of loyal editions, optimizing budgets.',
    },
    {
      icon: 'bi bi-percent',
      title: 'low fee',
      description:
        'Sponsorship is achievable, and conducting a SWOT analysis is competitive, according to Kotler.',
    },
    {
      icon: 'bi bi-headset',
      title: 'quick support',
      description:
        'The fact that the advertising platform changes the method of studying the market.',
    },
  ];
  /*  isMouseDown = false;
  currentMousePos = 0;
  lastMousePos = 0;
  lastMoveTo = 0;
  moveTo = 0;
  */
  markets = 0;
  meetings = 0;
  clientRevenue = 0;
  salesPipeline = 0;
  languages = 0;
  B2B = [
    { image: 'assets/img/service1.jpg', title: 'aaa' },
    { image: 'assets/img/service2.jpg', title: 'bbb' },
    { image: 'assets/img/service3.jpg', title: 'QQQQ' },
    { image: 'assets/img/service4.jpg', title: '23423' },
  ];
  B2Bindex = 0;
  prevIndex = 0;
  animationState = '';
  constructor(
    private loader: LoaderService,
    private sectionService: SectionService,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.animateNumbers('markets', 20);
    this.animateNumbers('meetings', 700);
    this.animateNumbers('clientRevenue', 9);
    this.animateNumbers('salesPipeline', 68);
    this.animateNumbers('languages', 15);
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

  updateIndex(newIndex: number) {
    if (newIndex >= 0 && newIndex < this.B2B.length) {
      const direction = newIndex > this.B2Bindex ? 'next' : 'prev';
      this.animationState = ''; // Reset animation state

      // Delay setting the new state to force re-evaluation
      setTimeout(() => {
        this.animationState = direction;
        this.B2Bindex = newIndex;
      }, 0);
    }
  }

  private calculateLeftPercentage() {
    const firstTwoDigits = Math.floor(this.screenWidth / 100);
    const lastDigit = firstTwoDigits % 10;

    if (lastDigit % 3 === 0) {
      this.leftPercentage = 21 + firstTwoDigits;
    } else {
      this.leftPercentage = 11.5 + firstTwoDigits;
    }
  }

  private animateNumbers(
    property:
      | 'markets'
      | 'meetings'
      | 'clientRevenue'
      | 'salesPipeline'
      | 'languages',
    target: number
  ) {
    let current = 0;
    const increment = target / 100;
    const interval = setInterval(() => {
      if (current < target) {
        current += increment;
        this[property] = Math.round(current);
      } else {
        clearInterval(interval);
      }
    }, 10);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth =
      event != null ? event.target.innerWidth : window.innerWidth;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const windowHeight = window.innerHeight;

    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
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

    if (rotateValue <= 373) {
      animatedElement.style.transform = `translateX(${translateXValue / 2}px) rotate(${rotateValue}deg)`;
    }
    if (rotateValue > 356) {
      animatedFullElement.style.transform = 'none';
    } else {
      animatedFullElement.style.opacity = '1';
      animatedFullElement.style.transform = `translateX(calc(${translateXValue * 2}px + ${this.screenWidth / 2}px))`;
    }

    if (rotateValue === 270) {
      animatedElement.style.transform = `translateX(${translateXValue}px) rotate(${rotateValue}deg)`;
    }
  }
  /* 
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const containerStrategie = document.getElementById('strategie-container');
    if (!containerStrategie) return;
    const containerPartners = document.getElementById('partners-container');
    if (!containerPartners) return;
    const containerService = document.getElementById('service-container');
    if (!containerService) return;
    const containerHome = document.getElementById('home-container');
    if (!containerHome) return;
    const scrollTop = window.scrollY;
    const homeContainerTop = containerHome.offsetTop;

    if (
      scrollTop >= homeContainerTop &&
      scrollTop < homeContainerTop + containerHome.scrollHeight
    ) {
      this.sectionService.setCurrentSection('default');
    } else {
      this.sectionService.setCurrentSection('change');
    }

  } */
  /* 
  ngAfterViewInit() {
    this.initEvents();
    this.createCarousel();
  }

  ngOnDestroy() {
    this.removeEvents();
  }

  /*  lerp(a: number, b: number, n: number): number {
    return n * (a - b) + b;
  }

  distanceZ(widthElement: number, length: number, gap: number): number {
    return widthElement / 2 / Math.tan(Math.PI / length) + gap;
  }

  calculateHeight(z: number): number {
    const t = Math.atan((90 * Math.PI) / 180 / 2);
    return t * 2 * z;
  }

  calculateFov(carouselProps: { w: number; h: number }): number {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const perspective = parseFloat(
      window.getComputedStyle(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        this.el.nativeElement.querySelector('.container-carrossel')
      ).perspective
    );
    const length =
      Math.sqrt(carouselProps.w * carouselProps.w) +
      Math.sqrt(carouselProps.h * carouselProps.h);
    return 2 * Math.atan(length / (2 * perspective)) * (180 / Math.PI);
  }

  getPosX(x: number): void {
    this.currentMousePos = x;
    this.moveTo =
      this.currentMousePos < this.lastMousePos
        ? this.moveTo - 2
        : this.moveTo + 2;
    this.lastMousePos = this.currentMousePos;
  }

  update = (): void => {
    this.lastMoveTo = this.lerp(this.moveTo, this.lastMoveTo, 0.05);
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    this.el.nativeElement
      .querySelector('.carrossel')
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      .style.setProperty('--rotatey', this.lastMoveTo + 'deg');
    requestAnimationFrame(this.update);
  };

  onResizee = (): { w: number; h: number } => {
    const boundingCarousel = this.el.nativeElement
      .querySelector('.container-carrossel')
      .getBoundingClientRect();
    return { w: boundingCarousel.width, h: boundingCarousel.height };
  }; */

  /*   createCarousel = (): void => {
    const carouselProps = this.onResizee();
    const length = this.carouselItems.length;
    const degrees = 360 / length;
    const gap = 20;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const tz = this.distanceZ(carouselProps.w, length, gap);
    const height = this.calculateHeight(tz);

    const container = this.el.nativeElement.querySelector('.container-car');
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    container.style.width = tz * 2 + gap * length + 'px';
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    container.style.height = height + 'px';

    const carouselItems =
      this.el.nativeElement.querySelectorAll('.carrossel-item');
    carouselItems.forEach((item: HTMLElement, i: number) => {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      const degreesByItem = degrees * i + 'deg';
      item.style.setProperty('--rotatey', degreesByItem);
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      item.style.setProperty('--tz', tz + 'px');
    });
  }; */
  /* 
  initEvents = (): void => {
    const container = this.el.nativeElement.querySelector('.container-car');
    const carousel = this.el.nativeElement.querySelector('.carrossel');

    carousel.addEventListener('mousedown', this.onMouseDown);
    carousel.addEventListener('mouseup', this.onMouseUp);
    container.addEventListener('mouseleave', this.onMouseLeave);
    carousel.addEventListener('mousemove', this.onMouseMove);

    carousel.addEventListener('touchstart', this.onTouchStart);
    carousel.addEventListener('touchend', this.onTouchEnd);
    container.addEventListener('touchmove', this.onTouchMove);

    window.addEventListener('resize', this.createCarousel);

    this.update();
  };

  removeEvents = (): void => {
    const container = this.el.nativeElement.querySelector('.container-car');
    const carousel = this.el.nativeElement.querySelector('.carrossel');

    carousel.removeEventListener('mousedown', this.onMouseDown);
    carousel.removeEventListener('mouseup', this.onMouseUp);
    container.removeEventListener('mouseleave', this.onMouseLeave);
    carousel.removeEventListener('mousemove', this.onMouseMove);

    carousel.removeEventListener('touchstart', this.onTouchStart);
    carousel.removeEventListener('touchend', this.onTouchEnd);
    container.removeEventListener('touchmove', this.onTouchMove);

    window.removeEventListener('resize', this.createCarousel);
  };

  onMouseDown = (): void => {
    this.isMouseDown = true;
    this.el.nativeElement.querySelector('.carrossel').style.cursor = 'grabbing';
  };

  onMouseUp = (): void => {
    this.isMouseDown = false;
    this.el.nativeElement.querySelector('.carrossel').style.cursor = 'grab';
  };

  onMouseLeave = (): void => {
    this.isMouseDown = false;
  };

  onMouseMove = (event: MouseEvent): void => {
    if (this.isMouseDown) {
      this.getPosX(event.clientX);
    }
  };

  onTouchStart = (): void => {
    this.isMouseDown = true;
    this.el.nativeElement.querySelector('.carrossel').style.cursor = 'grabbing';
  };

  onTouchEnd = (): void => {
    this.isMouseDown = false;
    this.el.nativeElement.querySelector('.carrossel').style.cursor = 'grab';
  };

  onTouchMove = (event: TouchEvent): void => {
    if (this.isMouseDown) {
      this.getPosX(event.touches[0].clientX);
    }
  }; */
}
