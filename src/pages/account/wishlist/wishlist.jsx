import { useNavigate } from "react-router-dom";
import { MOCK_PRODUCTS } from "shared/api/mocks";
import { ProductCard } from "entities/product";
import { useWishlist } from "shared/lib/wishlist";
import { useCart } from "shared/lib/cart";
import { useToast } from "shared/lib/toast";
import styles from "./wishlist.module.css";

export const WishlistPage = () => {
  const navigate = useNavigate();
  const { ids, toggle } = useWishlist();
  const { addItem } = useCart();
  const toast = useToast();
  const items = MOCK_PRODUCTS.filter((p) => ids.includes(p.id));

  if (items.length === 0) {
    return (
      <div className={styles.empty}>
        <div className={styles.heart}>♡</div>
        <h2>Your wishlist is empty.</h2>
        <p>
          You don't have any products in the wishlist yet. You will find a lot
          of interesting products on our Shop page.
        </p>
        <button className="btn btn-primary" onClick={() => navigate("/shop")}>
          Continue Shopping
        </button>
        <div style={{ marginTop: 60, textAlign: "left", width: "100%" }}>
          <div className="section-heading">
            <h2>Recently Viewed</h2>
          </div>
          <div className={styles.grid}>
            {MOCK_PRODUCTS.slice(0, 4).map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onClick={() => navigate(`/product/${p.id}`)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <h1 className={styles.title}>Wishlist</h1>
      {items.map((p) => (
        <div key={p.id} className={styles.item}>
          <button className={styles.x} onClick={() => toggle(p.id)}>
            ✕
          </button>
          <img src={p.image} alt={p.title} />
          <div className={styles.info}>
            <div className={styles.name}>{p.title}</div>
            <div className={styles.meta}>Color: {p.colors?.[0] || "—"}</div>
            <div className={styles.meta}>Quantity: 1</div>
            <div className={styles.price}>${p.price.toFixed(2)}</div>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              addItem(p);
              toast("Added to cart");
            }}
          >
            Add to cart
          </button>
        </div>
      ))}
    </>
  );
};
