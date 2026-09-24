import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PasswordInput } from "shared/ui/password-input";
import { Button } from "shared/ui/button";
import { useToast } from "shared/lib/toast";
import styles from "./new-password.module.css";

export const NewPasswordPage = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [pwd, setPwd] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (pwd.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (pwd !== confirm) {
      setError("New password and confirm new password do not match.");
      return;
    }
    setError("");
    toast("✓ Password reset successfully!");
    setTimeout(() => navigate("/login"), 500);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.left}>
        <h1 className={styles.title}>Create New Password</h1>
        <p className={styles.sub}>
          Your new password must be different from previous used passwords.
        </p>
        <form onSubmit={submit} className={styles.form}>
          <label className={styles.label}>Password</label>
          <PasswordInput
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            placeholder="••••••••"
          />
          <div style={{ fontSize: 12, color: "var(--gray)", marginTop: 6 }}>
            Must be at least 8 characters.
          </div>
          <label className={styles.label} style={{ marginTop: 20 }}>
            Confirm Password
          </label>
          <PasswordInput
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="••••••••"
          />
          {error && <div className={styles.error}>{error}</div>}
          <Button type="submit" variant="primary" style={{ marginTop: 24 }}>
            Reset Password
          </Button>
        </form>
      </div>
      <div className={styles.right} />
    </div>
  );
};
