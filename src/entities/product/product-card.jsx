import { HeartIcon } from "shared/ui/icon";
import { useWishlist } from "shared/lib/wishlist";
import styles from "./product-card.module.css";

export const ProductCard = ({ product, onClick }) => {
  const { has, toggle } = useWishlist();
  const liked = has(product.id);

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.imgWrap}>
        <img src={product.image} alt={product.title} />
        <button
          className={`${styles.wish} ${liked ? styles.active : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            toggle(product.id);
          }}
        >
          <HeartIcon size={16} filled={liked} />
        </button>
      </div>
      <div className={styles.bottom}>
        <div>
          <div className={styles.title}>{product.title}</div>
          <div className={styles.brand}>{product.brand}</div>
        </div>
        <div className={styles.price}>${product.price.toFixed(2)}</div>
      </div>
    </div>
  );
};
