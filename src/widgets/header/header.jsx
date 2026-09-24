import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { SearchIcon, HeartIcon, UserIcon, CartIcon } from "shared/ui/icon";
import { useCart } from "shared/lib/cart";
import { useWishlist } from "shared/lib/wishlist";
import styles from "./header.module.css";

const NAV = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=men", label: "Men" },
  { to: "/shop?category=women", label: "Women" },
  { to: "/shop?type=combos", label: "Combos" },
  { to: "/shop?type=joggers", label: "Joggers" },
];

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { count } = useCart();
  const { ids } = useWishlist();
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/shop?q=${encodeURIComponent(query.trim())}`);
      setQuery("");
    }
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link to="/" className={styles.logo}>
            Euphor<span>ia</span>
          </Link>

          <nav className={styles.nav}>
            {NAV.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <form className={styles.searchWrap} onSubmit={handleSearch}>
            <span className={styles.searchIcon}>
              <SearchIcon />
            </span>
            <input
              className={styles.searchInput}
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>

          <div className={styles.actions}>
            <button
              className={styles.iconBtn}
              onClick={() => navigate("/account/wishlist")}
              title="Wishlist"
            >
              <HeartIcon />
              {ids.length > 0 && (
                <span className={styles.badge}>{ids.length}</span>
              )}
            </button>
            <button
              className={styles.iconBtn}
              onClick={() => navigate("/account/info")}
              title="Account"
            >
              <UserIcon />
            </button>
            <button
              className={styles.iconBtn}
              onClick={() => navigate("/cart")}
              title="Cart"
            >
              <CartIcon />
              {count > 0 && <span className={styles.badge}>{count}</span>}
            </button>
            <button
              className={styles.burger}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {NAV.map((item) => (
            <Link key={item.label} to={item.to}>
              {item.label}
            </Link>
          ))}
          <Link to="/cart">Cart ({count})</Link>
          <Link to="/account/wishlist">Wishlist ({ids.length})</Link>
          <Link to="/account/info">My Account</Link>
        </div>
      )}
    </>
  );
};
