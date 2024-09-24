import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/home-layout';
import { baseOptions } from '../layout.config';
import { I18nProvider } from 'fumadocs-ui/i18n'; // Import the I18nProvider
import { baseUrl, createMetadata } from '../utils/metadata';

export const metadata = createMetadata({
  title: {
    template: '%s | Niko`s Stuff',
    default: 'Pomoc | Niko`s Stuff',
  },
  description: 'Randomowa Pomoc lol',
  metadataBase: baseUrl,
});

export default function Layout({ children }: { children: ReactNode }): React.ReactElement {
  const locale = 'pl'; // Set your default locale

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
      locale={locale} // Current locale
      translations={translations[locale]} // Get translations for the current locale
      locales={[
        { name: 'Polski', locale: 'pl' },
      ]}
    >
      <HomeLayout {...baseOptions}>{children}</HomeLayout>
    </I18nProvider>
  );
}
