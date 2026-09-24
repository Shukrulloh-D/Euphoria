import { useNavigate } from "react-router-dom";
import { MOCK_PRODUCTS } from "shared/api/mocks";
import { ProductCard } from "entities/product";
import styles from "./limelight.module.css";

export const Limelight = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <div className="section-heading">
        <h2>In The Limelight</h2>
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
    </section>
  );
};
