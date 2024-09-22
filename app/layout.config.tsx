import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
import React from 'react';

export const baseOptions: HomeLayoutProps = {
  nav: {
    transparentMode: 'always',
    title: (
      <span>
        <span style={{ color: 'orange' }}>🔶 Beta</span> | Pomoc - Niko`s Stuff
      </span>
    ),
  },
  links: [
    // {
    //   text: 'Dokumentacja',
    //   url: '/docs',
    //   active: 'nested-url',
    // },
  ],
  
};
