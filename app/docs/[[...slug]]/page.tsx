import { source } from '@/lib/source';
import { createMetadata } from '@/lib/metadata';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';


export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const params_w = await params
  const page = source.getPage(params_w.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} tableOfContent={{
      style: 'clerk',
      single: false,
    }} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents }} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const params_w = await params
  const page = source.getPage(params_w.slug);
  if (!page) notFound();
 
  return createMetadata({
    title: page.data.title,
    description: page.data.description,
  });
}