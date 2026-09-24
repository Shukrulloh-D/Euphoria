import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from 'shared/ui/input';
import { Button } from 'shared/ui/button';
import { useToast } from 'shared/lib/toast';
import styles from './reset-password.module.css';

export const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) { setError('We can not find your email.'); return; }
    setError('');
    toast('Reset link sent to your email');
    setTimeout(() => navigate('/check-email'), 500);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.left}>
        <h1 className={styles.title}>Reset Your Password</h1>
        <p className={styles.sub}>Enter your email and we'll send you a link to reset your password. Please check it.</p>
        <form onSubmit={submit}>
          <label className={styles.label}>Email</label>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="focus001@gmail.com" error={error} />
          <Button type="submit" variant="primary" style={{ marginTop: 24 }}>Send</Button>
        </form>
        <div className={styles.bottom}>Back to <Link to="/login">Login</Link></div>
      </div>
      <div className={styles.right} />
    </div>
  );
};
