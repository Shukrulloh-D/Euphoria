import { useState } from "react";
import styles from "./password-input.module.css";

export const PasswordInput = ({ value, onChange, placeholder, ...props }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.wrap}>
      <input
        type={show ? "text" : "password"}
        className={styles.input}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
      <button
        type="button"
        className={styles.eye}
        onClick={() => setShow(!show)}
      >
        {show ? "👁" : "👁‍🗨"}
      </button>
    </div>
  );
};
