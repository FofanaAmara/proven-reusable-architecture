import { getRegistreSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { type Language } from '@/lib/i18n';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import Link from 'next/link';

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const source = getRegistreSource(lang);

  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions(lang)}
      links={[]} // Remove header links from sidebar
      sidebar={{
        banner: (
          <div className="px-3 py-2 border-b border-gray-200">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              {lang === 'fr' ? '📚 Registre PRA' : '📚 PRA Registry'}
            </div>
          </div>
        ),
        footer: (
          <div className="py-3 border-t border-gray-200 space-y-3">
            <Link
              href={`/${lang}/guides/01-getting-started`}
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded transition-colors"
            >
              {lang === 'fr' ? '📖 Voir les Guides' : '📖 View Guides'}
            </Link>
            <div className="flex justify-center">
              <LanguageSwitcher currentLang={lang} />
            </div>
          </div>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
