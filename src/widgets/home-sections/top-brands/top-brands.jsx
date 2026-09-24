import { MOCK_BRANDS } from "shared/api/mocks";
import styles from "./top-brands.module.css";

export const TopBrands = () => (
  <div className={styles.wrap}>
    <h2>Top Brands Deal</h2>
    <p>
      Up To <span style={{ color: "var(--yellow)", fontWeight: 700 }}>60%</span>{" "}
      off on brands
    </p>
    <div className={styles.brands}>
      {MOCK_BRANDS.map((b) => (
        <div key={b} className={styles.brand}>
          {b}
        </div>
      ))}
    </div>
  </div>
);
