import { useNavigate } from "react-router-dom";
import styles from "./brand-banner.module.css";

export const BrandBanner = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrap}>
      <div className={styles.left}>
        <div className={styles.leftContent}>
          <h3>WE MADE YOUR EVERYDAY FASHION BETTER!</h3>
          <p>
            In our journey to improve everyday fashion, euphoria presents
            EVERYDAY wear range - Comfortable & Affordable fashion 24/7
          </p>
          <button className="btn btn-light" onClick={() => navigate("/shop")}>
            Shop Now
          </button>
        </div>
      </div>
      <div className={styles.right} />
    </div>
  );
};
