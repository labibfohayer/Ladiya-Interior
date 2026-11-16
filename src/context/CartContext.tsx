'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/data/products';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedMetal: string;
}

interface CartContextType {
  cart: CartItem[];
  wishlist: string[];
  isCartOpen: boolean;
  quickViewProduct: Product | null;
  currency: 'USD' | 'EUR' | 'GBP';
  currencySymbol: string;
  currencyRate: number;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product, quantity?: number, selectedMetal?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
  setCurrency: (c: 'USD' | 'EUR' | 'GBP') => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [currency, setCurrencyState] = useState<'USD' | 'EUR' | 'GBP'>('USD');

  // Load from localStorage on client
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('ladiya_cart') || localStorage.getItem('elauris_cart');
      if (savedCart) setCart(JSON.parse(savedCart));
      const savedWish = localStorage.getItem('ladiya_wishlist') || localStorage.getItem('elauris_wishlist');
      if (savedWish) setWishlist(JSON.parse(savedWish));
    } catch (e) {}
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ladiya_cart', JSON.stringify(cart));
    } catch (e) {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('ladiya_wishlist', JSON.stringify(wishlist));
    } catch (e) {}
  }, [wishlist]);

  const currencySymbol = currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '£';
  const currencyRate = currency === 'USD' ? 1.0 : currency === 'EUR' ? 0.92 : 0.79;

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (product: Product, quantity = 1, selectedMetal = product.metals[0]) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id && item.selectedMetal === selectedMetal);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id && item.selectedMetal === selectedMetal
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, selectedMetal }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prev =>
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const openQuickView = (product: Product) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);

  const setCurrency = (c: 'USD' | 'EUR' | 'GBP') => setCurrencyState(c);

  const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity * currencyRate, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        isCartOpen,
        quickViewProduct,
        currency,
        currencySymbol,
        currencyRate,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleWishlist,
        isInWishlist,
        openQuickView,
        closeQuickView,
        setCurrency,
        cartTotal,
        cartCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
