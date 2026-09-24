import styles from "./button.module.css";

export const Button = ({
  children,
  variant = "primary",
  className = "",
  full,
  ...props
}) => (
  <button
    className={`btn ${styles.btn} btn-${variant} ${full ? "btn-full" : ""} ${className}`}
    {...props}
  >
    {children}
  </button>
);
