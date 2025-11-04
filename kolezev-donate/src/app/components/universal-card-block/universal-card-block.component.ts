import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-universal-card-block',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './universal-card-block.component.html',
  styleUrls: ['./universal-card-block.component.scss']
})
export class UniversalCardBlockComponent {
  @Input() label: string = '';
  @Input() url: string = '';
}
