import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoAddress } from '../../content.config';
import { CopyButtonComponent } from '../copy-button/copy-button.component';

@Component({
  selector: 'app-crypto-block',
  standalone: true,
  imports: [CommonModule, CopyButtonComponent],
  templateUrl: './crypto-block.component.html',
  styleUrls: ['./crypto-block.component.scss']
})
export class CryptoBlockComponent {
  @Input() cryptoAddresses: CryptoAddress[] = [];
}
