import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CopyButtonComponent } from '../copy-button/copy-button.component';

interface RevolutPayment {
  label: string;
  username: string;
  url?: string;
}

interface PayPalPayment {
  label: string;
  email: string;
  sendMoneyUrl: string;
}

@Component({
  selector: 'app-alt-payments-block',
  standalone: true,
  imports: [CommonModule, ButtonModule, CopyButtonComponent],
  templateUrl: './alt-payments-block.component.html',
  styleUrls: ['./alt-payments-block.component.scss']
})
export class AltPaymentsBlockComponent {
  @Input() revolut!: RevolutPayment;
  @Input() paypal!: PayPalPayment;
}
