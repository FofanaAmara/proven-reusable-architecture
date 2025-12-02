import { source, getPRAMetadata } from '@/lib/source';
import { PRAMetadata } from '@/components/PRAMetadata';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

interface PageProps {
  params: {
    slug: string[];
  };
}

export default async function PRAPage({ params }: PageProps) {
  const page = source.getPage(params.slug);

  if (!page) {
    notFound();
  }

  const metadata = getPRAMetadata(page);

  if (!metadata) {
    notFound();
  }

  const MDX = page.data.body;

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/catalog" className="hover:text-foreground">
              Catalogue
            </Link>
            <span>/</span>
            <span className="text-foreground">{metadata.id}</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-8">{metadata.name}</h1>

        {/* Metadata card */}
        <PRAMetadata metadata={metadata} />

        {/* MDX Content */}
        <article className="prose prose-lg max-w-none">
          <MDX />
        </article>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Retour au catalogue
          </Link>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export function generateMetadata({ params }: PageProps): Metadata {
  const page = source.getPage(params.slug);

  if (!page) {
    return {};
  }

  const metadata = getPRAMetadata(page);

  if (!metadata) {
    return {};
  }

  return {
    title: metadata.name,
    description: `${metadata.id} - PRA ${metadata.status} avec ${metadata.proven_in_use.length} implémentation(s) prouvée(s)`,
  };
}
