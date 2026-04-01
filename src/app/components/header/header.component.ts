import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] 
})

export class HeaderComponent {
  // 🚀 use signal instead of boolean
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  navLinks = [
  { name: 'Platform', href: 'platform', current: true },
  { name: 'Ecosystems', href: 'ecosystems', current: false },
  { name: 'Industries', href: 'industries', current: false },
  { name: 'Pricing', href: 'pricing', current: false },
  { name: 'Resources', href: 'resources', current: false },
  { name: 'Contact Us', href: 'contact', current: false },
  { name: 'Request Demo', href: 'request-demo', current: false, cta: true }
];

}