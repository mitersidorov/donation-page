import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header-block',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './header-block.component.html',
  styleUrls: ['./header-block.component.scss']
})
export class HeaderBlockComponent {
  @Input() avatarUrl: string = '';
  @Input() title: string = '';
  @Input() youtubeUrl: string = '';
}
