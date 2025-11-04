import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ClipboardService } from '../../services/clipboard.service';

@Component({
  selector: 'app-copy-button',
  standalone: true,
  imports: [CommonModule, ButtonModule, TooltipModule],
  templateUrl: './copy-button.component.html',
  styleUrls: ['./copy-button.component.scss']
})
export class CopyButtonComponent {
  @Input() textToCopy: string = '';
  @Input() tooltip: string = 'Скопировать';
  @Input() ariaLabel: string = 'Скопировать в буфер обмена';
  
  copied: boolean = false;
  private copyTimeout: number | null = null;

  constructor(private clipboardService: ClipboardService) {}

  async copyText(): Promise<void> {
    const success = await this.clipboardService.copyToClipboard(this.textToCopy);
    
    if (success) {
      this.copied = true;
      
      if (this.copyTimeout) {
        clearTimeout(this.copyTimeout);
      }
      
      this.copyTimeout = window.setTimeout(() => {
        this.copied = false;
        this.copyTimeout = null;
      }, 2000);
    }
  }

  getTooltipText(): string {
    return this.copied ? 'Скопировано!' : this.tooltip;
  }
}
