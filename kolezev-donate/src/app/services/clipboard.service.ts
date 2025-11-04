import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {
  async copyToClipboard(text: string): Promise<boolean> {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
      } else {
        return this.fallbackCopyToClipboard(text);
      }
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      return this.fallbackCopyToClipboard(text);
    }
  }

  private fallbackCopyToClipboard(text: string): boolean {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      return successful;
    } catch (error) {
      console.error('Fallback copy failed:', error);
      document.body.removeChild(textArea);
      return false;
    }
  }
}
