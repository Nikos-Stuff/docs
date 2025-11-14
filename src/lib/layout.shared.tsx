import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { DoorOpenIcon } from 'lucide-react';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "Niko's Stuff - Docs",
    },
    links: [
      {
      icon: <DoorOpenIcon />,
      text: 'Go Back',
      url: 'https://nikostuff.com',
      // secondary items will be displayed differently on navbar
      secondary: false,
    },
    ]
  };
}
