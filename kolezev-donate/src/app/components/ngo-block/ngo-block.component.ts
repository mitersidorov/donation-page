import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-ngo-block',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './ngo-block.component.html',
  styleUrls: ['./ngo-block.component.scss']
})
export class NgoBlockComponent {
  @Input() label: string = '';
  @Input() url: string = '';
}
