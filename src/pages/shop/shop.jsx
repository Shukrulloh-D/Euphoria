import { useState, useMemo, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MOCK_PRODUCTS } from "shared/api/mocks";
import { ProductCard } from "entities/product";
import styles from "./shop.module.css";

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];
const COLORS = [
  { name: "black", hex: "#111111" },
  { name: "white", hex: "#FFFFFF" },
  { name: "gray", hex: "#9CA3AF" },
  { name: "red", hex: "#EF4444" },
  { name: "green", hex: "#22C55E" },
  { name: "blue", hex: "#3B82F6" },
  { name: "yellow", hex: "#F4D35E" },
  { name: "pink", hex: "#F8B8C8" },
  { name: "purple", hex: "#8B5CF6" },
  { name: "beige", hex: "#D4C5B0" },
];
const CATEGORIES = [
  "Tops",
  "Printed T-shirts",
  "Plain T-shirts",
  "Hoodies",
  "Shirts",
  "Boxers",
  "Joggers",
  "Jeans",
  "Dresses",
  "Coats",
];

const SORTS = [
  { key: "New", label: "New" },
  { key: "Low", label: "Price: Low" },
  { key: "High", label: "Price: High" },
  { key: "Rating", label: "Rating" },
];

export const ShopPage = () => {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  const category = params.get("category") || "all";
  const searchQuery = params.get("q") || "";

  const [activeSizes, setActiveSizes] = useState([]);
  const [activeColor, setActiveColor] = useState(null);
  const [activeCategory, setActiveCategory] = useState(
    category === "all" ? null : category,
  );
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(250);
  const [sort, setSort] = useState("New");
  const [localSearch, setLocalSearch] = useState(searchQuery);

  // Синхронизация с URL при переходах
  useEffect(() => {
    setActiveCategory(category === "all" ? null : category);
  }, [category]);

  useEffect(() => {
    setLocalSearch(searchQuery);
  }, [searchQuery]);

  const toggleSize = (s) =>
    setActiveSizes((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );
  const toggleColor = (c) => setActiveColor(activeColor === c ? null : c);
  const toggleCategory = (c) => {
    if (activeCategory === c) {
      setActiveCategory(null);
      setParams({});
    } else {
      setActiveCategory(c);
      setParams({ category: c });
    }
  };

  const reset = () => {
    setActiveSizes([]);
    setActiveColor(null);
    setActiveCategory(null);
    setPriceMin(0);
    setPriceMax(250);
    setSort("New");
    setParams({});
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (localSearch.trim())
      setParams({ ...Object.fromEntries(params), q: localSearch.trim() });
    else {
      params.delete("q");
      setParams(params);
    }
  };

  const products = useMemo(() => {
    let list = [...MOCK_PRODUCTS];

    // Категория (men/women)
    if (category !== "all") list = list.filter((p) => p.category === category);

    // Категория (по типу товара)
    if (activeCategory && !["men", "women"].includes(activeCategory)) {
      const map = {
        Tops: ["tops"],
        "Printed T-shirts": ["tshirts"],
        "Plain T-shirts": ["tshirts"],
        Hoodies: ["hoodies"],
        Shirts: ["shirts"],
        Boxers: ["boxers"],
        Joggers: ["joggers"],
        Jeans: ["jeans"],
        Dresses: ["dresses"],
        Coats: ["coats"],
      };
      const types = map[activeCategory] || [];
      if (types.length) list = list.filter((p) => types.includes(p.type));
    }

    // Размеры
    if (activeSizes.length) {
      list = list.filter((p) => p.sizes?.some((s) => activeSizes.includes(s)));
    }

    // Цвета
    if (activeColor) {
      list = list.filter((p) => p.colors?.includes(activeColor));
    }

    // Цена
    list = list.filter((p) => p.price >= priceMin && p.price <= priceMax);

    // Поиск
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q),
      );
    }

    // Сортировка
    if (sort === "Low") list.sort((a, b) => a.price - b.price);
    if (sort === "High") list.sort((a, b) => b.price - a.price);
    if (sort === "Rating") list.sort((a, b) => b.rating - a.rating);

    return list;
  }, [
    category,
    activeCategory,
    activeSizes,
    activeColor,
    priceMin,
    priceMax,
    sort,
    searchQuery,
  ]);

  return (
    <div className={`${styles.page} pageFadeIn`}>
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.filterGroup}>
            <div className={styles.filterHead}>🔎 Поиск</div>
            <form onSubmit={handleSearch}>
              <input
                className={styles.priceInput}
                style={{ width: "100%" }}
                placeholder="Название или бренд..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
              />
            </form>
          </div>

          <div className={styles.filterGroup}>
            <div className={styles.filterHead}>Категории</div>
            {CATEGORIES.map((c) => (
              <div
                key={c}
                className={`${styles.filterItem} ${activeCategory === c ? styles.active : ""}`}
                onClick={() => toggleCategory(c)}
              >
                <span>{c}</span>
                {activeCategory === c && <span>✓</span>}
              </div>
            ))}
          </div>

          <div className={styles.filterGroup}>
            <div className={styles.filterHead}>Цена</div>
            <input
              type="range"
              min="0"
              max="250"
              value={priceMax}
              onChange={(e) => setPriceMax(+e.target.value)}
              className={styles.slider}
            />
            <div className={styles.priceRow}>
              <span>${priceMin}</span>
              <span>${priceMax}</span>
            </div>
            <div className={styles.priceRow} style={{ marginTop: 8 }}>
              <input
                type="number"
                className={styles.priceInput}
                value={priceMin}
                onChange={(e) =>
                  setPriceMin(
                    Math.max(0, Math.min(+e.target.value, priceMax - 1)),
                  )
                }
                placeholder="Min"
              />
              <span>—</span>
              <input
                type="number"
                className={styles.priceInput}
                value={priceMax}
                onChange={(e) =>
                  setPriceMax(
                    Math.min(250, Math.max(+e.target.value, priceMin + 1)),
                  )
                }
                placeholder="Max"
              />
            </div>
          </div>

          <div className={styles.filterGroup}>
            <div className={styles.filterHead}>Цвета</div>
            <div className={styles.colors}>
              {COLORS.map((c) => (
                <div
                  key={c.name}
                  className={`${styles.color} ${activeColor === c.name ? styles.active : ""}`}
                  style={{
                    background: c.hex,
                    border:
                      c.hex === "#FFFFFF" ? "2px solid #E5E5E5" : undefined,
                  }}
                  onClick={() => toggleColor(c.name)}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <div className={styles.filterHead}>Размер</div>
            <div className={styles.sizes}>
              {SIZES.map((s) => (
                <div
                  key={s}
                  className={`${styles.size} ${activeSizes.includes(s) ? styles.active : ""}`}
                  onClick={() => toggleSize(s)}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          <button className={styles.resetBtn} onClick={reset}>
            Сбросить фильтры
          </button>
        </aside>

        <main>
          <div className={styles.toolbar}>
            <h1>
              {category === "women"
                ? "Women's"
                : category === "men"
                  ? "Men's"
                  : activeCategory
                    ? activeCategory
                    : "All"}{" "}
              Clothing
            </h1>
            <div className={styles.sorts}>
              {SORTS.map((s) => (
                <span
                  key={s.key}
                  className={`${styles.sort} ${sort === s.key ? styles.active : ""}`}
                  onClick={() => setSort(s.key)}
                >
                  {s.label}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.resultCount}>
            Показано <b>{products.length}</b> из <b>{MOCK_PRODUCTS.length}</b>{" "}
            товаров
          </div>

          {products.length > 0 ? (
            <div className={styles.grid}>
              {products.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onClick={() => navigate(`/product/${p.id}`)}
                />
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              <h3>Ничего не найдено</h3>
              <p>Попробуй изменить фильтры или поисковый запрос</p>
              <button
                className="btn btn-primary"
                style={{ marginTop: 20 }}
                onClick={reset}
              >
                Сбросить фильтры
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
