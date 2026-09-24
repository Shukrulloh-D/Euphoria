import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "shared/ui/input";
import { Button } from "shared/ui/button";
import { useToast } from "shared/lib/toast";
import styles from "./verification.module.css";

export const VerificationPage = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [code, setCode] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (code.length < 4) {
      toast("Enter valid code");
      return;
    }
    toast("Code verified!");
    setTimeout(() => navigate("/new-password"), 500);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.left}>
        <h1 className={styles.title}>Verification</h1>
        <p className={styles.sub}>Verify your code.</p>
        <form onSubmit={submit}>
          <label className={styles.label}>Verification Code</label>
          <Input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="0757"
          />
          <Button type="submit" variant="primary" style={{ marginTop: 24 }}>
            Verify Code
          </Button>
        </form>
      </div>
      <div className={styles.right} />
    </div>
  );
};
