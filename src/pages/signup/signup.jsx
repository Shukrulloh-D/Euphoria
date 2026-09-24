import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from 'shared/ui/input';
import { PasswordInput } from 'shared/ui/password-input';
import { Button } from 'shared/ui/button';
import { useToast } from 'shared/lib/toast';
import styles from './signup.module.css';

export const SignupPage = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [form, setForm] = useState({ email: '', pwd: '', agree: false, news: false });
  const [emailError, setEmailError] = useState('');

  const update = (k, v) => setForm({ ...form, [k]: v });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.email.includes('@')) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setEmailError('');
    if (form.pwd.length < 8) { toast('Password must be 8+ characters'); return; }
    if (!form.agree) { toast('Please agree to Terms and Privacy'); return; }
    toast('✓ Account created!');
    setTimeout(() => navigate('/verification'), 500);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.left}>
        <h1 className={styles.title}>Sign Up</h1>
        <p className={styles.sub}>Sign up for free to access to in any of our products</p>
        <div className={styles.oauth}>
          <button type="button" className={styles.oauthBtn} onClick={() => toast('Google sign-up')}>🔵 Continue With Google</button>
          <button type="button" className={styles.oauthBtn} onClick={() => toast('Twitter sign-up')}>🐦 Continue With Twitter</button>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <label className={styles.label}>Email Address</label>
            <Input value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="designer@gmail.com" error={emailError} />
          </div>
          <div>
            <div className={styles.passwordRow}>
              <label className={styles.label}>Password</label>
              <span className={styles.hide}>👁 Hide</span>
            </div>
            <PasswordInput value={form.pwd} onChange={(e) => update('pwd', e.target.value)} placeholder="Password" />
            <div style={{ fontSize: 12, color: 'var(--gray)', marginTop: 8 }}>Use 8 or more characters with a mix of letters, numbers & symbols</div>
          </div>
          <label className={styles.check}>
            <input type="checkbox" checked={form.agree} onChange={(e) => update('agree', e.target.checked)} />
            <span>Agree to our <a href="/terms">Terms of use</a> and <a href="/privacy">Privacy Policy</a></span>
          </label>
          <label className={styles.check}>
            <input type="checkbox" checked={form.news} onChange={(e) => update('news', e.target.checked)} />
            <span>Subscribe to our monthly newsletter</span>
          </label>
          <Button type="submit" variant="primary">Sign Up</Button>
        </form>
        <div className={styles.bottom}>Already have an account? <Link to="/login">Log in</Link></div>
      </div>
      <div className={styles.right} />
    </div>
  );
};
