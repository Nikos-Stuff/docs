import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';
import { generateOGImage } from 'fumadocs-ui/og';
import { notFound } from 'next/navigation';


// it should be cached forever
export const revalidate = false;

export const { staticGET: GET } = createFromSource(source);


export async function staticGET(
  _req: Request,
  { params }: { params: Promise<{ slug: string[] }> },
) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  return generateOGImage({
    title: page.data.title,
    description: page.data.description,
    site: "Niko's Stuff - Docs",
  });
}

export function generateStaticParams() {
  return source.generateParams().map((page) => ({
    ...page,
    slug: [...page.slug, 'image.png'],
  }));
}