import { useNavigate } from 'react-router-dom';
import { MOCK_BIG_SAVING } from 'shared/api/mocks';
import styles from './big-saving.module.css';

export const BigSaving = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <div className="section-heading"><h2>Big Saving Zone</h2></div>
      <div className={styles.grid}>
        {MOCK_BIG_SAVING.map((c, i) => (
          <div
            key={c.id}
            className={`${styles.card} ${i === 4 ? styles.wide : ''}`}
            style={{ background: c.bg, color: c.color }}
            onClick={() => navigate('/shop')}
          >
            <div className={styles.content}>
              <h3 className={styles.title}>{c.title}</h3>
              <div className={styles.sub}>{c.subtitle}</div>
              <div className={styles.discount}>{c.discount}</div>
              <div className={styles.arrow}>↓</div>
              <button className={styles.shopBtn}>Shop Now</button>
            </div>
            <img className={styles.img} src={c.image} alt={c.title} />
          </div>
        ))}
      </div>
    </section>
  );
};
