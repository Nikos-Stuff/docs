import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
import React from 'react';

export const baseOptions: BaseLayoutProps = {
  nav: {
    transparentMode: 'none',
    title: (
      // <span>
      //   <span style={{ color: 'orange' }}>🔶 Beta</span> | Pomoc - Niko`s Stuff
      // </span>
      <span className="flex items-center">
        <img
          src="https://api.nikostuff.com/v1/img/uploads/container_ec46113a1b8b38bd89c0729ef099582b/dc1078bb66f2951c1287c.png"
          alt="Logo"
          width={30}
          height={30}
          className="rounded-lg mr-2" // "mr-2" adds a small space between the image and text
        /> 
        Docs
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
