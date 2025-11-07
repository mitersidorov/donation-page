import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { APP_CONTENT } from './content.config';
import { HeaderBlockComponent } from './components/header-block/header-block.component';
import { DonationServicesBlockComponent } from './components/donation-services-block/donation-services-block.component';
import { UniversalCardBlockComponent } from './components/universal-card-block/universal-card-block.component';
import { CryptoBlockComponent } from './components/crypto-block/crypto-block.component';
import { NgoBlockComponent } from './components/ngo-block/ngo-block.component';
import { VpnBlockComponent } from './components/vpn-block/vpn-block.component';
import { OtherWaysBlockComponent } from './components/other-ways-block/other-ways-block.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderBlockComponent,
    DonationServicesBlockComponent,
    UniversalCardBlockComponent,
    CryptoBlockComponent,
    NgoBlockComponent,
    VpnBlockComponent,
    OtherWaysBlockComponent,
    AppFooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  content = APP_CONTENT;
}
