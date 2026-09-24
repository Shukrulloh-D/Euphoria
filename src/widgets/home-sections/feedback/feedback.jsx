import { MOCK_FEEDBACK } from "shared/api/mocks";
import { StarIcon } from "shared/ui/icon";
import styles from "./feedback.module.css";

export const Feedback = () => (
  <section className={styles.section}>
    <div className="section-heading">
      <h2>Feedback</h2>
    </div>
    <div className={styles.grid}>
      {MOCK_FEEDBACK.map((f) => (
        <div key={f.id} className={styles.card}>
          <div className={styles.head}>
            <img className={styles.avatar} src={f.avatar} alt={f.name} />
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map((i) => (
                <StarIcon key={i} filled={i <= f.rating} />
              ))}
            </div>
          </div>
          <div className={styles.name}>{f.name}</div>
          <p className={styles.text}>{f.text}</p>
        </div>
      ))}
    </div>
  </section>
);
