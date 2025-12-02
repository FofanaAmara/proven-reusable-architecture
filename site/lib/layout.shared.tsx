import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex flex-col">
          <Image
            src="/logo-bnc.svg"
            alt="Banque Nationale"
            width={155}
            height={50}
            className="h-8 w-auto"
          />
          <span className="text-[9px] font-medium text-gray-600 tracking-wider mt-0.5">
            PROVEN REUSABLE ARCHITECTURE
          </span>
        </div>
      ),
      url: '/',
      transparentMode: 'none',
    },
    links: [
      {
        text: 'Accueil',
        url: '/',
      },
      {
        text: 'Catalogue',
        url: '/catalogue',
      },
      {
        text: 'Librairie',
        url: '/registre',
      },
    ],
    // Disable dark mode - BNC branding is light mode only
    themeSwitch: {
      enabled: false,
    },
  };
}
