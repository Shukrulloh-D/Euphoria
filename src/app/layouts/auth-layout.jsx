import { Outlet, Link } from 'react-router-dom';
import styles from './auth-layout.module.css';

export const AuthLayout = () => (
  <div className={styles.wrap}>
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>Euphor<span>ia</span></Link>
      <div className={styles.search}>
        <input placeholder="Search" />
      </div>
      <div className={styles.right}>
        <select className={styles.lang}><option>English (United States)</option></select>
        <Link to="/login" className={`btn btn-outline ${styles.btnSmall}`}>Login</Link>
        <Link to="/signup" className={`btn btn-primary ${styles.btnSmall}`}>Sign Up</Link>
      </div>
    </header>
    <div className={styles.body}><Outlet /></div>
  </div>
);
