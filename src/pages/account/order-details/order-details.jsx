import styles from "./order-details.module.css";

export const OrderDetailsPage = () => (
  <>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 24,
      }}
    >
      <span style={{ cursor: "pointer" }}>←</span>
      <h1 className={styles.title}>Order Details</h1>
    </div>
    <div className={styles.card}>
      <div className={styles.row}>
        <div>
          Order no: <b>#123456789</b>
        </div>
        <div>
          Total: <b>$143.00</b>
        </div>
      </div>
      <div
        className={styles.row}
        style={{ color: "var(--gray)", fontSize: 13 }}
      >
        <div>Placed On: 2 June 2023 2:40 PM</div>
      </div>
      <div className={styles.timeline}>
        {["Order Placed", "Inprogress", "shipped", "Delivered"].map((s, i) => (
          <div key={s} className={styles.step}>
            <div className={`${styles.dot} ${i <= 1 ? styles.active : ""}`} />
            <div className={styles.stepLabel}>{s}</div>
          </div>
        ))}
      </div>
      <div className={styles.status}>
        8 June 2023 5:40 PM — <b>Your order has been successfully verified.</b>
      </div>
    </div>
    {[
      {
        title: "Printed white cote",
        color: "White",
        qty: 1,
        price: 29,
        img: "https://picsum.photos/seed/od1/100/120",
      },
      {
        title: "Men Blue Shirt",
        color: "Blue",
        qty: 1,
        price: 29,
        img: "https://picsum.photos/seed/od2/100/120",
      },
    ].map((p, i) => (
      <div key={i} className={styles.item}>
        <img src={p.img} alt="" />
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 600, marginBottom: 4 }}>{p.title}</div>
          <div style={{ fontSize: 13, color: "var(--gray)" }}>
            Color: {p.color}
          </div>
        </div>
        <div className={styles.qty}>Qty: {p.qty}</div>
        <div className={styles.price}>${p.price}.00</div>
        <button className={styles.remove}>✕</button>
      </div>
    ))}
  </>
);
