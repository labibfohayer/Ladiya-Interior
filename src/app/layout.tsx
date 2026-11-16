import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { CartDrawer } from '@/components/CartDrawer';
import { QuickViewModal } from '@/components/QuickViewModal';
import { LuxuryCursor } from '@/components/LuxuryCursor';
import { SmoothScroll } from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: 'Ladiya Interior – Luxury Architecture & Bespoke Interior Design Studio',
  description: 'Ladiya Interior is a premier architectural and interior design studio in Dhaka, specializing in bespoke residential, penthouse, and commercial spatial curation.',
  keywords: 'Ladiya Interior, luxury interior design Dhaka, architectural studio Gulshan, bespoke interior solutions, residential interior architecture, Banani interior design'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-[#1f1f1f]">
        <CartProvider>
          <SmoothScroll />
          <LuxuryCursor />
          <main className="flex-1">
            {children}
          </main>
          <CartDrawer />
          <QuickViewModal />
        </CartProvider>
      </body>
    </html>
  );
}
