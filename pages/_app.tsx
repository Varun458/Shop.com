import React, { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState<Record<string, { qty: number, price: number }>>({});
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem('cart');
      if (storedCart !== null) {
        setCart(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
  }, []);

  const saveCart = (myCart: Record<string, any>) => {
    localStorage.setItem('cart', JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt);
  };

  const addToCart = (title: string, price: number, qty: number) => {
    let newCart: Record<string, { qty: number, price: number }> = { ...cart };
    if (title in cart) {
      newCart[title].qty = cart[title].qty + qty;
    } else {
      newCart[title] = { qty, price };
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const removeFromCart = (title: string, price: number, qty: number) => {
    let newCart: Record<string, { qty: number, price: number }> = { ...cart };
    if (title in cart) {
      newCart[title].qty = cart[title].qty - qty;
    }
    if (newCart[title]['qty'] <= 0) {
      delete newCart[title];
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  return (
    <>
      <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
      <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
      <Footer />
    </>
  );
}
