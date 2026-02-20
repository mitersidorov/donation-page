export interface CryptoAddress {
  label: string;
  address: string;
  logo?: string;
}

export interface DonationService {
  label: string;
  url: string;
  logo?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface AppContent {
  seo: {
    title: string;
    description: string;
    url: string;
    ogImage: string;
    author: string;
    youtubeChannel: string;
  };
  header: {
    avatarUrl: string;
    title: string;
    socialLinks: SocialLink[];
  };
  donationServices: DonationService[];
  universalCard: {
    label: string;
    url: string;
  };
  cryptoAddresses: CryptoAddress[];
  altPayments: {
    paypal: {
      label: string;
      email: string;
      sendMoneyUrl: string;
      icon: string;
    };
  };
  ngo: {
    label: string;
    url: string;
  };
  vpn: {
    label: string;
    description: string;
    url: string;
  };
  otherWays: {
    title: string;
    content: string;
    email: string;
  };
  footer: {
    advertisingText: string;
    advertisingEmail: string;
  };
}

export const APP_CONTENT: AppContent = {
  seo: {
    title: 'Поддержите работу Дмитрия Колезева — независимого журналиста',
    description: 'Помогите независимому журналисту Дмитрию Колезеву продолжать работу. Донаты через Patreon, PayPal, криптовалюту и другие способы.',
    url: 'https://kolezev.com',
    ogImage: '/assets/og/ogimage.png',
    author: 'Дмитрий Колезев',
    youtubeChannel: 'https://www.youtube.com/@Kolezev'
  },
  header: {
    avatarUrl: 'https://yt3.googleusercontent.com/FnsiGT9UWbClv3oazFTAGd_2C-PQK5llBdoJYR5KqATLgiSd_236e57otbBSqnLVkLrUZiSS6eY=s300-c-k-c0x00ffffff-no-rj',
    title: 'Поддержите работу Дмитрия Колезева — независимого журналиста',
    socialLinks: [
      { platform: 'YouTube', url: 'https://www.youtube.com/@Kolezev', icon: 'pi-youtube' },
      { platform: 'Telegram', url: 'https://t.me/kolezev', icon: 'pi-telegram' },
      { platform: 'Instagram', url: 'https://instagram.com/kolezev', icon: 'pi-instagram' },
      { platform: 'TikTok', url: 'https://tiktok.com/@kolezev', icon: 'pi-tiktok' },
      { platform: 'X (Twitter)', url: 'https://x.com/kolezev', icon: 'pi-twitter' },
      { platform: 'Threads', url: 'https://threads.net/@kolezev', icon: 'pi-comments' }
    ]
  },
  donationServices: [
    {
      label: 'Патреон',
      url: 'https://patreon.com/kolezev',
      logo: '/assets/logos/patreon.svg'
    },
    {
      label: 'Спонсорство на YouTube',
      url: 'https://www.youtube.com/channel/UCLxr1ACVGlrUvpGkc_ruMKg/join',
      logo: '/assets/logos/youtube.svg'
    }
  ],
  universalCard: {
    label: 'Донат с нероссийской карты',
    url: 'https://kolezev.donat.media/'
  },
  cryptoAddresses: [
    {
      label: 'USDT TRC 20',
      address: 'TZEq5aNnu1jdgd85FTBzyyfJCqvBMX1HAG',
      logo: '/assets/logos/usdt-logo.svg'
    },
    {
      label: 'USDT ERC 20',
      address: '0x69eD6836a666A88f98E6EE868522CEaa05F63e47',
      logo: '/assets/logos/usdt-logo.svg'
    },
    {
      label: 'TRX',
      address: 'TZEq5aNnu1jdgd85FTBzyyfJCqvBMX1HAG',
      logo: '/assets/logos/tron-trx-logo.svg'
    },
    {
      label: 'Bitcoin',
      address: 'bc1q5crqxquwznp5uwslq48nsqf423akew7q4truu9',
      logo: '/assets/logos/bitcoin-btc-logo.svg'
    },
    {
      label: 'Ethereum',
      address: '0x69eD6836a666A88f98E6EE868522CEaa05F63e47',
      logo: '/assets/logos/ethereum-eth-logo.svg'
    },
    {
      label: 'Ton',
      address: 'UQCHy0MFh4wCT6mR_v9AkvC0A0_v32LknUx_TPNonHSqL8vO',
      logo: '/assets/logos/toncoin-ton-logo.svg'
    }
  ],
  altPayments: {
    paypal: {
      label: 'PayPal',
      email: 'kolezev@protonmail.com',
      sendMoneyUrl: 'https://www.paypal.com/paypalme/kolezev',
      icon: 'pi-paypal'
    }
  },
  ngo: {
    label: 'Донат через американскую НКО',
    url: 'https://www.paypal.com/donate/?hosted_button_id=LQGY54VJ43R3J'
  },
  otherWays: {
    title: 'Другие способы',
    content: 'Хотите задонатить другим способом? Напишите мне на',
    email: 'kolezev.inbox@gmail.com'
  },
  vpn: {
    label: 'Ural VPN',
    description: 'Оформите подписку на Ural VPN — и поможете независимой журналистике',
    url: 'https://t.me/ural_vpnbot'
  },
  footer: {
    advertisingText: 'Размещение рекламы в YouTube, Telegram, Instagram',
    advertisingEmail: 'adkolezev@gmail.com'
  }
};
