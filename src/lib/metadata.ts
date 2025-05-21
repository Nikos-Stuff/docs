import type { Metadata } from 'next/types';

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: 'https://nikostuff.com',
      images: [
        {
          url: '/cheese.png',
          width: 1200,
          height: 630,
          alt: "Niko's Stuff Docs",
        },
      ],
      siteName: "Niko's Stuff Docs",
      type: 'website',
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@money_is_shark',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: [
        {
          url: '/cheese.png',
          alt: "Niko's Stuff Docs",
        },
      ],
      ...override.twitter,
    },
  };
}

export const baseUrl =
  process.env.NODE_ENV === 'development' || !process.env.VERCEL_URL
    ? new URL('http://localhost:3000')
    : new URL(`https://${process.env.VERCEL_URL}`);