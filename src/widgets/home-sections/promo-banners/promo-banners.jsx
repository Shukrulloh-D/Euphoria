import { useNavigate } from 'react-router-dom';
import styles from './promo-banners.module.css';

export const PromoBanners = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrap}>
      <div className={`${styles.banner} ${styles.yellow}`} onClick={() => navigate('/shop')}>
        <div className={styles.content}>
          <div className={styles.tag}>Low Price</div>
          <div className={styles.title}>High Coziness</div>
          <div className={styles.discount}>UPTO 50% OFF</div>
          <div className={styles.link}>Explore Items</div>
        </div>
        <div className={styles.img}><img src="https://picsum.photos/seed/cozy/300/300" alt="" /></div>
      </div>
      <div className={`${styles.banner} ${styles.purple}`} onClick={() => navigate('/shop')}>
        <div className={styles.content}>
          <div className={styles.tag}>Beyoung Presents</div>
          <div className={styles.title}>Breezy Summer Style</div>
          <div className={styles.discount}>UPTO 50% OFF</div>
          <div className={styles.link}>Explore Items</div>
        </div>
        <div className={styles.img}><img src="https://picsum.photos/seed/breezy/300/300" alt="" /></div>
      </div>
    </div>
  );
};
