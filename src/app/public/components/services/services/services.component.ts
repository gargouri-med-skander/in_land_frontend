import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  markets = 0;
  meetings = 0;
  clientRevenue = 0;
  salesPipeline = 0;
  languages = 0;

  ngOnInit(): void {
    this.animateNumbers('markets', 20);
    this.animateNumbers('meetings', 700);
    this.animateNumbers('clientRevenue', 9);
    this.animateNumbers('salesPipeline', 68);
    this.animateNumbers('languages', 15);
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
}
