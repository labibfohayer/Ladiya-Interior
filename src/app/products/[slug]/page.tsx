import { Suspense } from 'react';
import { PRODUCTS } from '@/data/products';
import ProductDetailClient from './ProductDetailClient';

export function generateStaticParams() {
  return PRODUCTS.map(p => ({ slug: p.slug }));
}

export default async function ProductDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ProductDetailClient slug={slug} />
    </Suspense>
  );
}
