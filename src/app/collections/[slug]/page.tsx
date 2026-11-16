import { Suspense } from 'react';
import CollectionClient from './CollectionClient';

export function generateStaticParams() {
  return [
    { slug: 'all' },
    { slug: 'living-architecture' },
    { slug: 'spatial-lighting' },
    { slug: 'dining-millwork' },
    { slug: 'acoustic-surfaces' },
    { slug: 'penthouse-suites' }
  ];
}

export default function CollectionPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <CollectionClient />
    </Suspense>
  );
}
