import { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();
const KEY = "euphoria_wishlist";

export const WishlistProvider = ({ children }) => {
  const [ids, setIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(KEY) || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(ids));
  }, [ids]);

  const toggle = (id) =>
    setIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  const has = (id) => ids.includes(id);

  return (
    <WishlistContext.Provider value={{ ids, toggle, has }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
