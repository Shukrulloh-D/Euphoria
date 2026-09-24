import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();
const KEY = "euphoria_cart";

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(KEY) || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing)
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + qty } : i,
        );
      return [...prev, { ...product, qty }];
    });
  };
  const removeItem = (id) =>
    setItems((prev) => prev.filter((i) => i.id !== id));
  const updateQty = (id, qty) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  const clear = () => setItems([]);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQty, clear, total, count }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
