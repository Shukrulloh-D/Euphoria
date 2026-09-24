import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./orders.module.css";

const TABS = ["Active", "Cancelled", "Completed"];
const ORDERS = [
  {
    id: "123456789",
    date: "2 June 2023",
    estimated: "15 June 2023",
    status: "Inprogress",
    payment: "Cash on delivery",
    product: {
      title: "Black Printed T-shirt",
      color: "Pink",
      qty: 1,
      total: 23,
    },
    image: "https://picsum.photos/seed/order1/100/120",
  },
  {
    id: "123456789",
    date: "2 June 2023",
    estimated: "15 June 2023",
    status: "Shipped",
    payment: "Cash on delivery",
    product: {
      title: "Printed blue & white Cote",
      color: "White",
      qty: 1,
      total: 143,
    },
    image: "https://picsum.photos/seed/order2/100/120",
  },
  {
    id: "123456789",
    date: "2 June 2023",
    estimated: "15 June 2023",
    status: "Inprogress",
    payment: "Cash on delivery",
    product: { title: "Blue Shirt", color: "Blue", qty: 1, total: 93 },
    image: "https://picsum.photos/seed/order3/100/120",
  },
];

export const OrdersPage = () => {
  const [tab, setTab] = useState("Active");
  const navigate = useNavigate();
  return (
    <>
      <h1 className={styles.title}>My Orders</h1>
      <div className={styles.tabs}>
        {TABS.map((t) => (
          <div
            key={t}
            className={`${styles.tab} ${tab === t ? styles.active : ""}`}
            onClick={() => setTab(t)}
          >
            {t}
          </div>
        ))}
      </div>
      {ORDERS.map((o, i) => (
        <div key={i} className={styles.order}>
          <div className={styles.head}>
            <div>
              <b>Order no: #{o.id}</b>
            </div>
            <div>
              Order Status: <b>{o.status}</b>
            </div>
          </div>
          <div className={styles.meta}>
            <div>Order Date: {o.date}</div>
            <div>Payment Method: {o.payment}</div>
          </div>
          <div className={styles.meta}>
            <div>Estimated Delivery Date: {o.estimated}</div>
          </div>
          <div className={styles.product}>
            <img src={o.image} alt="" />
            <div className={styles.info}>
              <div className={styles.productTitle}>{o.product.title}</div>
              <div className={styles.productMeta}>Color: {o.product.color}</div>
              <div className={styles.productMeta}>Qty: {o.product.qty}</div>
              <div className={styles.productMeta}>
                Total: ${o.product.total}
              </div>
            </div>
            <button
              className={styles.viewBtn}
              onClick={() => navigate("/account/order-details")}
            >
              View Detail
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
