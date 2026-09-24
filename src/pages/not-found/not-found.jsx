import { useNavigate } from "react-router-dom";
import styles from "./not-found.module.css";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className={`${styles.page} pageFadeIn`}>
      <h1 className={styles.big}>
        4<span>0</span>4
      </h1>
      <h2>Oops! Page not found</h2>
      <p>
        The page you are looking for might have been removed or temporarily
        unavailable.
      </p>
      <button className="btn btn-primary" onClick={() => navigate("/")}>
        Back to HomePage
      </button>
    </div>
  );
};
