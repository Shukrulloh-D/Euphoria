import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "app/layouts/main-layout";
import { AuthLayout } from "app/layouts/auth-layout";
import { HomePage } from "pages/home";
import { ShopPage } from "pages/shop";
import { ProductPage } from "pages/product";
import { CartPage } from "pages/cart";
import { CheckoutPage } from "pages/checkout";
import { OrderConfirmedPage } from "pages/order-confirmed";
import { NotFoundPage } from "pages/not-found";
import { AccountLayout } from "pages/account";
import { AccountInfoPage } from "pages/account/info";
import { OrdersPage } from "pages/account/orders";
import { OrderDetailsPage } from "pages/account/order-details";
import { WishlistPage } from "pages/account/wishlist";
import { AddressPage } from "pages/account/address";
import { LoginPage } from "pages/login";
import { SignupPage } from "pages/signup";
import { ResetPasswordPage } from "pages/reset-password";
import { CheckEmailPage } from "pages/check-email";
import { VerificationPage } from "pages/verification";
import { NewPasswordPage } from "pages/new-password";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "product/:id", element: <ProductPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "order-confirmed", element: <OrderConfirmedPage /> },
      {
        path: "account",
        element: <AccountLayout />,
        children: [
          { index: true, element: <AccountInfoPage /> },
          { path: "info", element: <AccountInfoPage /> },
          { path: "orders", element: <OrdersPage /> },
          { path: "order-details", element: <OrderDetailsPage /> },
          { path: "wishlist", element: <WishlistPage /> },
          { path: "address", element: <AddressPage /> },
        ],
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/reset-password", element: <ResetPasswordPage /> },
      { path: "/check-email", element: <CheckEmailPage /> },
      { path: "/verification", element: <VerificationPage /> },
      { path: "/new-password", element: <NewPasswordPage /> },
    ],
  },
]);
