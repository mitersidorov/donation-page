import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-vpn-block',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './vpn-block.component.html',
  styleUrls: ['./vpn-block.component.scss']
})
export class VpnBlockComponent {
  @Input() label: string = '';
  @Input() description: string = '';
  @Input() url: string = '';
}
