import React, { Suspense } from 'react';
import ProductDetailClient from './ProductDetailClient';
import { PRODUCTS } from '@/data/products';

export function generateStaticParams() {
  return PRODUCTS.map(p => ({ slug: p.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ProductDetailClient slug={slug} />
    </Suspense>
  );
}
