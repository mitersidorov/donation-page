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
    youtubeUrl: string;
  };
  donationServices: DonationService[];
  universalCard: {
    label: string;
    url: string;
  };
  cryptoAddresses: CryptoAddress[];
  altPayments: {
    revolut: {
      label: string;
      username: string;
      url?: string;
    };
    paypal: {
      label: string;
      email: string;
      sendMoneyUrl: string;
    };
  };
  ngo: {
    label: string;
    url: string;
  };
  vpn: {
    label: string;
    telegramBot: string;
    url: string;
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
    url: 'https://donate-kolezev.vercel.app',
    ogImage: '/assets/og/og-image.jpg',
    author: 'Дмитрий Колезев',
    youtubeChannel: 'https://www.youtube.com/@Kolezev'
  },
  header: {
    avatarUrl: 'https://yt3.googleusercontent.com/FnsiGT9UWbClv3oazFTAGd_2C-PQK5llBdoJYR5KqATLgiSd_236e57otbBSqnLVkLrUZiSS6eY=s300-c-k-c0x00ffffff-no-rj',
    title: 'Поддержите работу Дмитрия Колезева — независимого журналиста.',
    youtubeUrl: 'https://www.youtube.com/@Kolezev'
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
    label: 'Донат с любой нероссийской карты',
    url: 'https://kolezev.donat.media/'
  },
  cryptoAddresses: [
    {
      label: 'USDT TRC 20',
      address: 'TZEq5aNnu1jdgd85FTBzyyfJCqvBMX1HAG',
      logo: '/assets/logos/usdt.svg'
    },
    {
      label: 'USDT ERC 20',
      address: '0x69eD6836a666A88f98E6EE868522CEaa05F63e47',
      logo: '/assets/logos/usdt.svg'
    },
    {
      label: 'TRX',
      address: 'TZEq5aNnu1jdgd85FTBzyyfJCqvBMX1HAG',
      logo: '/assets/logos/trx.svg'
    },
    {
      label: 'Bitcoin',
      address: 'bc1q5crqxquwznp5uwslq48nsqf423akew7q4truu9',
      logo: '/assets/logos/btc.svg'
    },
    {
      label: 'Ethereum',
      address: '0x69eD6836a666A88f98E6EE868522CEaa05F63e47',
      logo: '/assets/logos/eth.svg'
    },
    {
      label: 'Ton',
      address: 'UQCHy0MFh4wCT6mR_v9AkvC0A0_v32LknUx_TPNonHSqL8vO',
      logo: '/assets/logos/ton.svg'
    }
  ],
  altPayments: {
    revolut: {
      label: 'Revolut',
      username: '@kolezev'
    },
    paypal: {
      label: 'PayPal',
      email: 'kolezev@protonmail.com',
      sendMoneyUrl: 'https://www.paypal.com/paypalme/kolezev'
    }
  },
  ngo: {
    label: 'Донат через американскую НКО (для налогоплательщиков США)',
    url: 'https://www.paypal.com/donate/?hosted_button_id=LQGY54VJ43R3J'
  },
  vpn: {
    label: 'Купить Ural VPN',
    telegramBot: 'ural_vpnbot',
    url: 'https://t.me/ural_vpnbot'
  },
  footer: {
    advertisingText: 'Размещение рекламы в YouTube, Telegram, Instagram',
    advertisingEmail: 'adkolezev@gmail.com'
  }
};
