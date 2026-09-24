import { useNavigate } from 'react-router-dom';
import styles from './order-confirmed.module.css';

export const OrderConfirmedPage = () => {
  const navigate = useNavigate();
  return (
    <div className={`${styles.page} pageFadeIn`}>
      <div className={styles.card}>
        <div className={styles.icon}>✓</div>
        <h1>Your Order is Confirmed</h1>
        <p>Thank you for shopping with Euphoria! We'll send you a confirmation email shortly.</p>
        <button className="btn btn-primary" onClick={() => navigate('/shop')}>Continue Shopping</button>
      </div>
    </div>
  );
};
