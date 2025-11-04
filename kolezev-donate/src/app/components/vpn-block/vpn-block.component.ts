import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CopyButtonComponent } from '../copy-button/copy-button.component';

@Component({
  selector: 'app-vpn-block',
  standalone: true,
  imports: [CommonModule, ButtonModule, CopyButtonComponent],
  templateUrl: './vpn-block.component.html',
  styleUrls: ['./vpn-block.component.scss']
})
export class VpnBlockComponent {
  @Input() label: string = '';
  @Input() telegramBot: string = '';
  @Input() url: string = '';
}
