import React, { Suspense } from 'react';
import CollectionClient from './CollectionClient';
import { CATEGORIES } from '@/data/products';

export function generateStaticParams() {
  return [
    { slug: 'all' },
    ...CATEGORIES.map(c => ({ slug: c.id }))
  ];
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <CollectionClient slug={slug} />
    </Suspense>
  );
}
