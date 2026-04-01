import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-connect-saas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './connect-saas.component.html',
})
export class ConnectSaasComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.animateCounters();
    this.animateBars();
  }

  animateCounters(): void {
    const counters = document.querySelectorAll<HTMLElement>('.saas-counter');
    counters.forEach(el => {
      const target = parseInt(el.dataset['target'] || '0', 10);
      let current = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = current.toString();
      }, 40);
    });
  }

  animateBars(): void {
    const bars = document.querySelectorAll<HTMLElement>('.saas-bar');
    setTimeout(() => {
      bars.forEach(bar => {
        bar.style.transition = 'width 1.2s ease-in-out';
        bar.style.width = bar.dataset['width'] || '0%';
      });
    }, 300);
  }
}