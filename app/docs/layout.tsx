import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import type { ReactNode } from 'react';
import { baseOptions } from '../layout.config';
import {createMetadata } from '../utils/metadata';
import { source } from '@/app/source';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import { I18nProvider } from 'fumadocs-ui/i18n';



export const metadata = createMetadata({
  title: {
    template: '%s | Niko`s Stuff',
    default: 'Pomoc - Niko`s Stuff',
  },
  description: 'Randomowa Pomoc lol',
});

export default function Layout({ children }: { children: ReactNode }) {
  const locale = 'pl';

  const translations = {
    pl: {
      search: 'Wyszukaj',
      searchNoResult: 'Brak wyników',
      toc: 'Rozpiska',
      tocNoHeadings: 'Brak',
      lastUpdate: 'Ostatnio zmieniono',
      chooseLanguage: 'Wybierz język',
      nextPage: 'Następny',
      previousPage: 'Poprzedni',
      chooseTheme: 'Motyw',
      editOnGithub: 'Edytuj na GitHubie',
    },
  };

  return (
    <I18nProvider
      locale={locale}
      translations={translations[locale]}
      locales={[
        { name: 'Polski', locale: 'pl' },
      ]}
    >
      <DocsLayout
        tree={source.pageTree}
        {...baseOptions}
        sidebar={{
          tabs: false,
          banner: (
            <RootToggle
              options={[
                {
                  title: 'Minecraft',
                  description: 'Informacje dotyczące Minecraft',
                  icon: '⛏️',
                  url: '/docs/mc',
                },
                {
                  title: 'Cała reszta',
                  description: 'Inne informacje bez kategorii',
                  icon: '🔥',
                  url: '/docs/other',
                },
              ]}
            />
          ),
        }}
      >
        {/* <PageTransition> */}
          {children}
        {/* </PageTransition> */}
      </DocsLayout>
    </I18nProvider>
  );
}
