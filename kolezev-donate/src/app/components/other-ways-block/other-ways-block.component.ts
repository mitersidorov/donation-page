import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-other-ways-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './other-ways-block.component.html',
  styleUrls: ['./other-ways-block.component.scss']
})
export class OtherWaysBlockComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() email: string = '';
}
