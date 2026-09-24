import { useNavigate } from 'react-router-dom';
import { useCart } from 'shared/lib/cart';
import { useToast } from 'shared/lib/toast';
import { TrashIcon } from 'shared/ui/icon';
import styles from './cart.module.css';

export const CartPage = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { items, removeItem, updateQty, total, clear } = useCart();
  const shipping = 5;
  const discount = items.length > 2 ? 30 : 0;
  const grandTotal = total + shipping - discount;

  if (items.length === 0) {
    return (
      <div className={styles.page}>
        <div className={styles.empty}>
          <div className={styles.emptyImg}>🛒</div>
          <h2>Your cart is empty and sad :(</h2>
          <p>Add something to make it happy!</p>
          <button className="btn btn-primary" onClick={() => navigate('/shop')}>Continue Shopping</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.page} pageFadeIn`}>
      <h1 className={styles.title}>Cart</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Product Details</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Shipping</th>
            <th>Subtotal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>
                <div className={styles.product}>
                  <img src={item.image} alt={item.title} />
                  <div>
                    <div className={styles.productTitle}>{item.title}</div>
                    <div className={styles.productMeta}>Color: {item.selectedColor || 'Default'}</div>
                    <div className={styles.productMeta}>Size: {item.selectedSize || 'M'}</div>
                  </div>
                </div>
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <div className={styles.qty}>
                  <button onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}>−</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                </div>
              </td>
              <td>FREE</td>
              <td><b>${(item.price * item.qty).toFixed(2)}</b></td>
              <td style={{ textAlign: 'center' }}>
                <span className={styles.remove} onClick={() => { removeItem(item.id); toast('Item removed'); }}>
                  <TrashIcon />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.bottom}>
        <div>
          <h3 style={{ marginBottom: 20, fontSize: 20 }}>Discount Codes</h3>
          <div className={styles.coupon}>
            <input placeholder="Enter your coupon code if you have one" />
            <button className="btn btn-primary" onClick={() => toast('Coupon applied!')}>Apply Coupon</button>
          </div>
          <button className="btn btn-outline" onClick={() => navigate('/shop')}>← Continue Shopping</button>
        </div>
        <div className={styles.summary}>
          <div className={styles.row}><span>Sub Total</span><span>${total.toFixed(2)}</span></div>
          <div className={styles.row}><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
          {discount > 0 && <div className={styles.row} style={{ color: 'var(--green)' }}><span>Discount</span><span>-${discount.toFixed(2)}</span></div>}
          <div className={`${styles.row} ${styles.total}`}><span>Grand Total</span><span>${grandTotal.toFixed(2)}</span></div>
          <button className="btn btn-primary btn-full" style={{ marginTop: 20 }} onClick={() => navigate('/checkout')}>
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
