import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from 'shared/ui/input';
import { PasswordInput } from 'shared/ui/password-input';
import { Button } from 'shared/ui/button';
import { useToast } from 'shared/lib/toast';
import styles from './login.module.css';

export const LoginPage = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) { toast('Enter a valid email'); return; }
    if (pwd.length < 4) { toast('Password too short'); return; }
    toast('Welcome back!');
    setTimeout(() => navigate('/account/info'), 500);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.left}>
        <h1 className={styles.title}>Sign In Page</h1>
        <div className={styles.oauth}>
          <button type="button" className={styles.oauthBtn} onClick={() => toast('Google sign-in')}>🔵 Continue With Google</button>
          <button type="button" className={styles.oauthBtn} onClick={() => toast('Twitter sign-in')}>🐦 Continue With Twitter</button>
        </div>
        <div className={styles.divider}>OR</div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input label="User name or email address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <div>
            <div className={styles.passwordRow}>
              <label className={styles.label}>Password</label>
              <Link to="/reset-password" className={styles.forgot}>Forgot your password</Link>
            </div>
            <PasswordInput value={pwd} onChange={(e) => setPwd(e.target.value)} placeholder="Password" />
          </div>
          <Button type="submit" variant="primary">Sign In</Button>
        </form>
        <div className={styles.bottom}>Don't have an account? <Link to="/signup">Sign up</Link></div>
      </div>
      <div className={styles.right} />
    </div>
  );
};
