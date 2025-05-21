import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';
import { generateOGImage } from 'fumadocs-ui/og';
import { notFound } from 'next/navigation';

export const revalidate = false;

// Prepare helper functions
const { GET: staticSearchGET } = createFromSource(source);

export async function GET(
  req: Request,
  { params }: { params: { slug: string[] } },
) {
  const { slug } = params;

  const isImageRequest = slug[slug.length - 1] === 'image.png';

  if (isImageRequest) {
    const pageSlug = slug.slice(0, -1);
    const page = source.getPage(pageSlug);
    if (!page) return notFound();

    return generateOGImage({
      title: page.data.title,
      description: page.data.description,
      site: "Niko's Stuff - Docs",
    });
  }

  // Fallback to static search handler
  return staticSearchGET(req);
}
