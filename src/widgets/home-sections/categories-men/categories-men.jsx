import { useNavigate } from 'react-router-dom';
import { MOCK_CATEGORIES } from 'shared/api/mocks';
import styles from './categories-men.module.css';

export const CategoriesMen = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <div className="section-heading"><h2>Categories For Men</h2></div>
      <div className={styles.grid}>
        {MOCK_CATEGORIES.men.map(c => (
          <div key={c.id} className={styles.card} onClick={() => navigate('/shop?category=men')}>
            <div className={styles.img}><img src={c.image} alt={c.title} /></div>
            <div className={styles.row}>
              <div>
                <div className={styles.title}>{c.title}</div>
                <div className={styles.explore}>Explore Now!</div>
              </div>
              <div className={styles.arrow}>→</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
