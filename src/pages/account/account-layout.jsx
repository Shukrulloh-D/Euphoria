import { NavLink, Outlet } from "react-router-dom";
import { useCart } from "shared/lib/cart";
import { UserIcon, CartIcon, HeartIcon } from "shared/ui/icon";
import styles from "./account-layout.module.css";

export const AccountLayout = () => {
  const { count } = useCart();
  return (
    <div className={styles.page}>
      <aside className={styles.sidebar}>
        <div className={styles.greet}>
          Hello <b>Jhanvi</b>
        </div>
        <p className={styles.welcome}>Welcome to your Account</p>
        <nav className={styles.nav}>
          <NavLink
            to="/account/orders"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            📦 My orders
          </NavLink>
          <NavLink
            to="/account/wishlist"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            ♡ Wishlist
          </NavLink>
          <NavLink
            to="/account/info"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <UserIcon size={16} /> My info
          </NavLink>
          <NavLink to="/login" className={styles.signout}>
            ↪ Sign out
          </NavLink>
        </nav>
      </aside>
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};
