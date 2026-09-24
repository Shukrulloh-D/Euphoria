import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_PRODUCTS } from 'shared/api/mocks';
import { useCart } from 'shared/lib/cart';
import { useToast } from 'shared/lib/toast';
import { ProductCard } from 'entities/product';
import { StarIcon, CheckIcon } from 'shared/ui/icon';
import styles from './product.module.css';

const SIZES = ['XS', 'S', 'M', 'L', 'XL'];
const COLORS = ['#111111', '#F4D35E', '#F8B8C8', '#8B5CF6'];

export const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const { addItem } = useCart();
  const product = MOCK_PRODUCTS.find(p => p.id === Number(id)) || MOCK_PRODUCTS[0];

  const [size, setSize] = useState('M');
  const [color, setColor] = useState(COLORS[0]);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState('desc');

  const handleAdd = () => {
    addItem({ ...product, selectedSize: size, selectedColor: color }, qty);
    toast(`✓ Added to cart: ${product.title}`);
  };

  const handleBuy = () => {
    addItem({ ...product, selectedSize: size, selectedColor: color }, qty);
    navigate('/cart');
  };

  const similar = MOCK_PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className={`${styles.page} pageFadeIn`}>
      <div className="breadcrumbs">
        <span>Home</span>›<span>Shop</span>›<span>{product.category}</span>›<strong>{product.title}</strong>
      </div>

      <div className={styles.top}>
        <div className={styles.gallery}>
          <div className={styles.thumbs}>
            {[product.image, product.image, product.image].map((img, i) => (
              <div key={i} className={`${styles.thumb} ${i === 0 ? styles.active : ''}`}>
                <img src={img} alt="" />
              </div>
            ))}
          </div>
          <div className={styles.mainImg}><img src={product.image} alt={product.title} /></div>
        </div>

        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <div className={styles.rating}>
            <div className={styles.stars}>
              {[1,2,3,4,5].map(i => <StarIcon key={i} filled={i <= Math.round(product.rating)} />)}
            </div>
            <span>{product.rating}</span>
            <span style={{ color: 'var(--gray)' }}>· 120 comments</span>
          </div>

          <div className={styles.price}>
            ${product.price.toFixed(2)}
            <span className={styles.old}>${(product.price * 1.4).toFixed(2)}</span>
          </div>

          <div className={styles.optLabel}>Select Size</div>
          <div className={styles.sizes}>
            {SIZES.map(s => (
              <div key={s} className={`${styles.size} ${size === s ? styles.active : ''}`} onClick={() => setSize(s)}>{s}</div>
            ))}
          </div>

          <div className={styles.optLabel}>Colours Available</div>
          <div className={styles.colors}>
            {COLORS.map(c => (
              <div key={c} className={`${styles.color} ${color === c ? styles.active : ''}`} style={{ background: c }} onClick={() => setColor(c)} />
            ))}
          </div>

          <div className={styles.actions}>
            <div className={styles.qty}>
              <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
            <button className="btn btn-primary" style={{ flex: 1 }} onClick={handleAdd}>🛒 Add to cart</button>
            <button className="btn btn-outline" onClick={handleBuy}>Buy Now</button>
          </div>

          <div className={styles.badges}>
            <div className={styles.badge}>🛡 <div><strong>Secure payment</strong><br/>Safe & trusted</div></div>
            <div className={styles.badge}>📏 <div><strong>Size & Fit</strong><br/>Check the sizing</div></div>
            <div className={styles.badge}>🚚 <div><strong>Free shipping</strong><br/>On orders $50+</div></div>
            <div className={styles.badge}>↩ <div><strong>Free Returns</strong><br/>Within 30 days</div></div>
          </div>
        </div>
      </div>

      <div className={styles.tabs}>
        {[['desc', 'Product Description'], ['comments', 'User comments'], ['qa', 'Question & Answer']].map(([k, l]) => (
          <div key={k} className={`${styles.tab} ${tab === k ? styles.active : ''}`} onClick={() => setTab(k)}>{l}</div>
        ))}
      </div>

      {tab === 'desc' && (
        <div className={styles.desc}>
          <h3>Materials & Care</h3>
          <p>100% Bio-washed Cotton — makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime, anywhere.</p>
          <div className={styles.specs}>
            <div className={styles.spec}><div className={styles.specLabel}>Fabric</div><div className={styles.specValue}>Bio-washed Cotton</div></div>
            <div className={styles.spec}><div className={styles.specLabel}>Pattern</div><div className={styles.specValue}>Printed</div></div>
            <div className={styles.spec}><div className={styles.specLabel}>Fit</div><div className={styles.specValue}>Regular-fit</div></div>
            <div className={styles.spec}><div className={styles.specLabel}>Neck</div><div className={styles.specValue}>Round Neck</div></div>
            <div className={styles.spec}><div className={styles.specLabel}>Sleeve</div><div className={styles.specValue}>Half-sleeves</div></div>
            <div className={styles.spec}><div className={styles.specLabel}>Style</div><div className={styles.specValue}>Casual Wear</div></div>
          </div>
        </div>
      )}

      {tab === 'comments' && <p style={{ padding: 20, color: 'var(--gray)' }}>No comments yet. Be the first!</p>}
      {tab === 'qa' && <p style={{ padding: 20, color: 'var(--gray)' }}>No questions yet.</p>}

      <div className={styles.similar}>
        <div className="section-heading"><h2>Similar Products</h2></div>
        <div className={styles.grid4}>
          {similar.map(p => (
            <ProductCard key={p.id} product={p} onClick={() => navigate(`/product/${p.id}`)} />
          ))}
        </div>
      </div>
    </div>
  );
};
