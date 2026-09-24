import { Link } from "react-router-dom";
import styles from "./check-email.module.css";

export const CheckEmailPage = () => (
  <div className={styles.wrap}>
    <div className={styles.left}>
      <h1 className={styles.title}>Check Email</h1>
      <p className={styles.sub}>
        Please check your email inbox and click on the provided link to reset
        your password. If you don't receive email,{" "}
        <a href="/reset-password">Click here to resend</a>
      </p>
      <Link to="/login" className={styles.bottom}>
        ← Back to Login
      </Link>
    </div>
    <div className={styles.right} />
  </div>
);
