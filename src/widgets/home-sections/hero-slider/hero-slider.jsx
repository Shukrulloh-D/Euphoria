import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "shared/ui/icon";
import { MOCK_HERO_SLIDES } from "shared/api/mocks";
import styles from "./hero-slider.module.css";

export const HeroSlider = () => {
  const [i, setI] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setInterval(
      () => setI((prev) => (prev + 1) % MOCK_HERO_SLIDES.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  const slide = MOCK_HERO_SLIDES[i];

  return (
    <section className={styles.slider}>
      <div
        className={styles.slide + " " + styles.active}
        style={{ background: slide.bg, color: slide.textColor }}
      >
        <div className={styles.content}>
          <div className={styles.eyebrow}>{slide.eyebrow}</div>
          <h1 className={styles.title}>{slide.title}</h1>
          <div className={styles.subtitle}>{slide.subtitle}</div>
          <button className="btn btn-light" onClick={() => navigate("/shop")}>
            Shop Now
          </button>
        </div>
        <div className={styles.image}>
          <img src={slide.image} alt={slide.title} />
        </div>
      </div>
      <div className={styles.arrows}>
        <div
          className={styles.arrow}
          onClick={() =>
            setI((i - 1 + MOCK_HERO_SLIDES.length) % MOCK_HERO_SLIDES.length)
          }
        >
          <ArrowLeft />
        </div>
        <div
          className={styles.arrow}
          onClick={() => setI((i + 1) % MOCK_HERO_SLIDES.length)}
        >
          <ArrowRight />
        </div>
      </div>
      <div className={styles.dots}>
        {MOCK_HERO_SLIDES.map((_, idx) => (
          <div
            key={idx}
            className={`${styles.dot} ${idx === i ? styles.active : ""}`}
            onClick={() => setI(idx)}
          />
        ))}
      </div>
    </section>
  );
};
