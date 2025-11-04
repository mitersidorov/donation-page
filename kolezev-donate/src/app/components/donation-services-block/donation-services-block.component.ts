import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DonationService } from '../../content.config';

@Component({
  selector: 'app-donation-services-block',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './donation-services-block.component.html',
  styleUrls: ['./donation-services-block.component.scss']
})
export class DonationServicesBlockComponent {
  @Input() services: DonationService[] = [];
}
