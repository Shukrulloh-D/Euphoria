import { useNavigate } from 'react-router-dom';
import { MOCK_NEW_ARRIVAL } from 'shared/api/mocks';
import styles from './new-arrival.module.css';

export const NewArrival = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <div className="section-heading"><h2>New Arrival</h2></div>
      <div className={styles.grid}>
        {MOCK_NEW_ARRIVAL.map(p => (
          <div key={p.id} className={styles.card} onClick={() => navigate('/shop')}>
            <div className={styles.img}><img src={p.image} alt={p.title} /></div>
            <div className={styles.title}>{p.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
