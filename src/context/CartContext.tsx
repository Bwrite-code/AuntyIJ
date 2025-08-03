import React, { createContext, useState, useContext, ReactNode } from 'react';

// Mock data for initial state
const initialCartItems: any[] = [];

const initialOrderHistory = [
  { id: 'A123', date: '2025-07-10', total: 35.97, status: 'Delivered', items: [{ name: 'Spaghetti Carbonara', quantity: 2 }] },
];

// Define the shape of the context data
interface CartContextData {
  cartItems: any[];
  orderHistory: any[];
  userProfile: any;
  addToCart: (item: any) => void;
  removeFromCart: (name: string) => void;
  updateQuantity: (name: string, delta: number) => void;
  placeOrder: (orderDetails: any) => void;
  updateProfile: (profile: any) => void;
}

const CartContext = createContext<CartContextData | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<any[]>(initialCartItems);
  const [orderHistory, setOrderHistory] = useState<any[]>(initialOrderHistory);
  const [userProfile, setUserProfile] = useState<any>(() => {
    const savedProfile = localStorage.getItem('userProfile');
    return savedProfile ? JSON.parse(savedProfile) : { name: '', email: '', phone: '', address: '' };
  });

  const addToCart = (itemToAdd: any) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.name === itemToAdd.name);
      if (existingItem) {
        return prevItems.map(item =>
          item.name === itemToAdd.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...itemToAdd, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (name: string) => {
    setCartItems(cartItems.filter(item => item.name !== name));
  };

  const updateQuantity = (name: string, delta: number) => {
    setCartItems(cartItems.map(item =>
      item.name === name ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ).filter(item => item.quantity > 0));
  };

  const placeOrder = (orderDetails: any) => {
    const newOrder = {
      id: `ORD${Math.floor(Math.random() * 1000)}`,
      date: new Date().toISOString().split('T')[0],
      total: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
      status: 'Processing',
      items: cartItems,
      ...orderDetails,
    };
    setOrderHistory([newOrder, ...orderHistory]);
    setCartItems([]);
  };

  const updateProfile = (profile: any) => {
    setUserProfile(profile);
    localStorage.setItem('userProfile', JSON.stringify(profile));
  };

  return (
    <CartContext.Provider value={{ cartItems, orderHistory, userProfile, addToCart, removeFromCart, updateQuantity, placeOrder, updateProfile }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
