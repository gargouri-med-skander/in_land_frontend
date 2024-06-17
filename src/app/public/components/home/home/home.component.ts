import { Component, HostListener, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  screenWidth!: number;
  leftPercentage = 14.5;
  constructor(private loader: LoaderService) {}

  ngOnInit(): void {
    this.loader.setLoaderActive(true);
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
    const animatedQuestionElement = document.querySelector(
      '.highlight-text'
    ) as HTMLElement;
    const animatedParagraphElement = document.querySelector(
      '.profit-description'
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
        animatedQuestionElement.classList.remove('fadeOutRight');
        animatedQuestionElement.classList.add('fadeInRight');
        animatedParagraphElement.classList.remove('fadeOutRight');
        animatedParagraphElement.classList.add('fadeInRight');
      }
    } else {
      animatedFullElement.style.opacity = '0';
      animatedTitleElement.classList.remove('fadeinzoom');
      animatedTitleElement.classList.add('fadeoutzoom');
      animatedQuestionElement.classList.remove('fadeOutRight');
      animatedQuestionElement.classList.add('fadeInRight');
      animatedParagraphElement.classList.remove('fadeInRight');
      animatedParagraphElement.classList.add('fadeOutRight');
    }
  }
}
