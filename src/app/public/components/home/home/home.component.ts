import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  screenWidth: any;

  ngOnInit(): void {
    this.onResize(null);
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

    const scrollHeight = windowHeight - 240 + 1.2 * windowHeight;

    const maxScroll = scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScroll;

    const translateXValue = -scrollFraction * 1000;
    const rotateValue = scrollFraction * 360 + 250;
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

    if (rotateValue <= 360) {
      animatedElement.style.transform = `translateX(${translateXValue}px) rotate(${rotateValue + 25}deg)`;
    }
    if (rotateValue === 250) {
      animatedElement.style.transform = `translateX(${translateXValue}px) rotate(${rotateValue - 25}deg)`;
    }
    if (rotateValue > 260) {
      if (rotateValue > 300) {
        animatedTitleElement.classList.remove('fadeoutzoom');
        animatedTitleElement.classList.add('fadeinzoom');
        animatedQuestionElement.classList.remove('fadeOutRight');
        animatedQuestionElement.classList.add('fadeInRight');
        animatedParagraphElement.classList.remove('fadeOutRight');
        animatedParagraphElement.classList.add('fadeInRight');
      }
      if (translateXValue + 304 >= -10) {
        animatedFullElement.style.opacity = `1`;
        animatedFullElement.style.transform = `translateX(${translateXValue + 240}px)`;
      }
    } else {
      animatedFullElement.style.opacity = `0`;
      animatedTitleElement.classList.remove('fadeinzoom');
      animatedTitleElement.classList.add('fadeoutzoom');
      animatedQuestionElement.classList.remove('fadeInRight');
      animatedQuestionElement.classList.add('fadeOutRight');
      animatedParagraphElement.classList.remove('fadeInRight');
      animatedParagraphElement.classList.add('fadeOutRight');
    }
  }
}
