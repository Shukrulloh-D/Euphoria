import styles from './input.module.css';

export const Input = ({ label, error, className = '', ...props }) => (
  <div className={styles.wrap}>
    {label && <label className={styles.label}>{label}</label>}
    <input className={`${styles.input} ${error ? styles.error : ''} ${className}`} {...props} />
    {error && <span className={styles.errMsg}>{error}</span>}
  </div>
);
