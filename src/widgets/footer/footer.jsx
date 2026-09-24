import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.css';

const Fb = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.5 17.5 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94z"/></svg>;
const Ig = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const Tw = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>;
const Li = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>;

const POPULAR_CATS = ['Shirts', 'Printed T-Shirts', 'Plain T-Shirts', 'Hoodies', 'Jeans', 'Activewear', 'Boxers', 'Joggers', 'Dresses', 'Coats', 'Tops', 'Shorts'];

export const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.col}>
          <h4>Need Help</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/account/orders">Track Order</Link>
          <Link to="/returns">Returns & Refunds</Link>
          <Link to="/faq">FAQ's</Link>
          <Link to="/career">Career</Link>
        </div>
        <div className={styles.col}>
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/blog">euphoria Blog</Link>
          <Link to="/stores">euphoriastan</Link>
          <Link to="/collab">Collaboration</Link>
          <Link to="/media">Media</Link>
        </div>
        <div className={styles.col}>
          <h4>More Info</h4>
          <Link to="/terms">Term and Conditions</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/shipping">Shipping Policy</Link>
          <Link to="/sitemap">Sitemap</Link>
        </div>
        <div className={styles.col}>
          <h4>Location</h4>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, marginBottom: 14 }}>support@euphoria.in</p>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, marginBottom: 14 }}>Eklingpura Chouraha, Ahmedabad Main Road</p>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, marginBottom: 24 }}>(NH 8- Near Mahadev Hotel Udaipur, India-313002)</p>
          <div className={styles.app}>
            <h4>Download The App</h4>
            <div className={styles.appLinks}>
              <a href="/" className={styles.appBtn}>▶ Google Play</a>
              <a href="/" className={styles.appBtn}> App Store</a>
            </div>
          </div>
          <div className={styles.socials}>
            <a href="/"><Fb /></a>
            <a href="/"><Ig /></a>
            <a href="/"><Tw /></a>
            <a href="/"><Li /></a>
          </div>
        </div>
      </div>

      <div className={styles.catsHeader}>
        <div className={styles.cats} onClick={() => setOpen(!open)}>
          <span>Popular Categories</span>
          <span className={`${styles.chev} ${open ? styles.chevOpen : ''}`}>▼</span>
        </div>
        <div className={`${styles.catsList} ${open ? styles.catsListOpen : ''}`}>
          <ul>
            {POPULAR_CATS.map(c => (
              <li key={c}>
                <Link to={`/shop?cat=${c.toLowerCase()}`}>{c}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</div>
    </footer>
  );
};
