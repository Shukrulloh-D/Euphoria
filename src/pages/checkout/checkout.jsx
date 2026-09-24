import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from 'shared/lib/cart';
import { useToast } from 'shared/lib/toast';
import { Input } from 'shared/ui/input';
import styles from './checkout.module.css';

export const CheckoutPage = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { items, total, clear } = useCart();
  const [method, setMethod] = useState('card');
  const [shipping, setShipping] = useState('same');

  const savings = 30;
  const shippingCost = 5;
  const grand = total + shippingCost - savings;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (items.length === 0) { toast('Cart is empty'); return; }
    toast('✓ Order placed successfully!');
    clear();
    setTimeout(() => navigate('/order-confirmed'), 600);
  };

  return (
    <form className={`${styles.page} pageFadeIn`} onSubmit={handleSubmit}>
      <div className="breadcrumbs"><span>Home</span>›<span>My Account</span>›<strong>Check Out</strong></div>
      <h1 className={styles.title}>Check Out</h1>
      <div className={styles.grid}>
        <div>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Billing Details</h3>
            <div className={styles.fields}>
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />
              <Input placeholder="Country / Region" />
              <Input placeholder="Company Name" />
              <Input className={styles.full} placeholder="Street Address" />
              <Input className={styles.full} placeholder="Apt, suite, unit (optional)" />
              <Input placeholder="City" />
              <Input placeholder="State" />
              <Input placeholder="Postal Code" />
              <Input placeholder="Phone" />
            </div>
            <label style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 20, fontSize: 14 }}>
              <input type="checkbox" defaultChecked /> Save my information for faster checkout
            </label>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Shipping Address</h3>
            <div className={`${styles.method} ${shipping === 'same' ? styles.active : ''}`} onClick={() => setShipping('same')}>
              <input type="radio" checked={shipping === 'same'} onChange={() => {}} />
              Same as Billing address
            </div>
            <div className={`${styles.method} ${shipping === 'diff' ? styles.active : ''}`} onClick={() => setShipping('diff')}>
              <input type="radio" checked={shipping === 'diff'} onChange={() => {}} />
              Use a different shipping address
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Shipping Method</h3>
            <div style={{ background: 'var(--gray-light)', padding: 20, borderRadius: 8, marginBottom: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, marginBottom: 4 }}>Arrives by Monday, June 7 <span>$5.00</span></div>
              <div style={{ fontSize: 13, color: 'var(--gray)' }}>Additional fees may apply</div>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Payment Method</h3>
            <div className={`${styles.method} ${method === 'card' ? styles.active : ''}`} onClick={() => setMethod('card')}>
              <input type="radio" checked={method === 'card'} onChange={() => {}} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600 }}>Credit Card</div>
                <div style={{ fontSize: 13, color: 'var(--gray)' }}>We accept all major credit cards.</div>
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                <span style={{ padding: '4px 10px', border: '1px solid var(--border)', borderRadius: 4, fontSize: 11 }}>VISA</span>
                <span style={{ padding: '4px 10px', border: '1px solid var(--border)', borderRadius: 4, fontSize: 11 }}>MC</span>
                <span style={{ padding: '4px 10px', border: '1px solid var(--border)', borderRadius: 4, fontSize: 11 }}>PayPal</span>
              </div>
            </div>
            {method === 'card' && (
              <div className={styles.fields} style={{ marginTop: 16 }}>
                <Input className={styles.full} placeholder="Card number" />
                <Input className={styles.full} placeholder="Name on card" />
                <Input placeholder="Expiration date (MM/YY)" />
                <Input placeholder="Security Code" />
              </div>
            )}
            <div className={`${styles.method} ${method === 'cod' ? styles.active : ''}`} onClick={() => setMethod('cod')}>
              <input type="radio" checked={method === 'cod'} onChange={() => {}} />
              Cash on delivery
            </div>
            <div className={`${styles.method} ${method === 'paypal' ? styles.active : ''}`} onClick={() => setMethod('paypal')}>
              <input type="radio" checked={method === 'paypal'} onChange={() => {}} />
              PayPal
            </div>
          </div>

          <button className="btn btn-primary" type="submit">Pay Now</button>
        </div>

        <aside className={styles.summary}>
          <h3 className={styles.sectionTitle}>Order Summary</h3>
          {items.length === 0 && <p style={{ color: 'var(--gray)' }}>Cart is empty</p>}
          {items.map(item => (
            <div key={item.id} className={styles.item}>
              <img src={item.image} alt={item.title} />
              <div className={styles.itemInfo}>
                <div className={styles.itemName}>{item.title}</div>
                <div className={styles.itemMeta}>Color: {item.selectedColor || '—'}</div>
                <div className={styles.itemMeta}>Qty: {item.qty}</div>
              </div>
              <div className={styles.itemPrice}>${(item.price * item.qty).toFixed(2)}</div>
            </div>
          ))}
          <div className={styles.row}><span>Subtotal ({items.length} items)</span><span>${total.toFixed(2)}</span></div>
          <div className={styles.row}><span>Savings</span><span style={{ color: 'var(--green)' }}>-${savings.toFixed(2)}</span></div>
          <div className={styles.row}><span>Shipping</span><span>-${shippingCost.toFixed(2)}</span></div>
          <div className={`${styles.row} ${styles.total}`}><span>Total</span><span>${grand.toFixed(2)}</span></div>
        </aside>
      </div>
    </form>
  );
};
