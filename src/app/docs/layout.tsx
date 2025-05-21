import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { AlbumIcon, CodeSquareIcon } from 'lucide-react';





export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      sidebar={{
        tabs: {
          transform: (option, node) => {
            // Example: assign icon based on node.category or node.title or node.id
            let icon;
            switch (node.name) {
              case 'Main Docs':
                icon = <AlbumIcon />;
                break;
              default:
                icon = <CodeSquareIcon />; // fallback icon
            }
            return {
              ...option,
              icon,
            };
          },
        },
      }}
    >
      {children}
    </DocsLayout>
  );
}