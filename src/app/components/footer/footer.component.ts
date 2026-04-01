import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterModule,CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  quickLinks = [
    { label: 'Platform', link: '/platform' },
    { label: 'Ecosystems', link: '/ecosystems' },
    { label: 'Industries', link: '/industries' },
    { label: 'Pricing', link: '/pricing' },
    { label: 'Resources', link: '/resources' },
    { label: 'Contact', link: '/contact' },
  ];

  ecosystems = [
    'Connect.SaaS',
    'Connect.Core',
    'Connect.Field',
    'Connect.Distributor',
    'Connect.Pay',
    'Connect.Intelligence',
  ];

  industries = [
    'FMCG',
    'Beverage',
    'Pharma',
    'Electronics',
    '3PL',
  ];

  legalLinks = [
    { label: 'Privacy Policy', link: '/privacy-policy' },
    { label: 'Terms of Service', link: '/terms-of-service' },
    { label: 'GDPR Compliance', link: '/gdpr-compliance' },
    { label: 'Security', link: '/security' },
  ];

}
