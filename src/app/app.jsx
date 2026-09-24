import { RouterProvider } from "react-router-dom";
import { ToastProvider } from "shared/lib/toast";
import { CartProvider } from "shared/lib/cart";
import { WishlistProvider } from "shared/lib/wishlist";
import { router } from "./router";

export const App = () => (
  <ToastProvider>
    <CartProvider>
      <WishlistProvider>
        <RouterProvider router={router} />
      </WishlistProvider>
    </CartProvider>
  </ToastProvider>
);
