import { useToast } from "shared/lib/toast";
import styles from "./info.module.css";

const FIELDS = [
  { label: "Your Name", value: "Jhanvi Shah" },
  { label: "Email Address", value: "Jhanvi@gmail.com" },
  { label: "Phone Number", value: "8980252445" },
  { label: "Password", value: "••••••••" },
];

const ADDRESSES = [
  {
    name: "Jhanvi shah",
    phone: "8980252445",
    address:
      "1/4 Pragatinagar Flats, opp. jain derasar, near Jain derasar, Vijayanagar road",
    tags: ["Home", "Default billing address"],
  },
  {
    name: "Jhanvi shah",
    phone: "8980252445",
    address:
      "1/4 Pragatinagar Flats, opp. jain derasar, near Jain derasar, Vijayanagar road",
    tags: ["Home", "Default shipping address"],
  },
  {
    name: "Jhanvi shah",
    phone: "8980252445",
    address:
      "1/4 Pragatinagar Flats, opp. jain derasar, near Jain derasar, Vijayanagar road",
    tags: ["Office"],
  },
  {
    name: "Jhanvi shah",
    phone: "8980252445",
    address:
      "1/4 Pragatinagar Flats, opp. jain derasar, near Jain derasar, Vijayanagar road",
    tags: ["Home2"],
  },
];

export const AccountInfoPage = () => {
  const toast = useToast();
  return (
    <>
      <h1 className={styles.title}>My Info</h1>
      <h3 className={styles.section}>Contact Details</h3>
      <div className={styles.contact}>
        {FIELDS.map((f) => (
          <div key={f.label} className={styles.row}>
            <div>
              <div className={styles.label}>{f.label}</div>
              <div className={styles.value}>{f.value}</div>
            </div>
            <button
              className={styles.change}
              onClick={() => toast(`Editing ${f.label}`)}
            >
              Change
            </button>
          </div>
        ))}
      </div>

      <div className={styles.addrHeader}>
        <h3 className={styles.section}>Address</h3>
        <button
          className={styles.change}
          onClick={() => toast("Add new address")}
        >
          Add New
        </button>
      </div>
      <div className={styles.addrGrid}>
        {ADDRESSES.map((a, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardName}>{a.name}</div>
            <div className={styles.cardPhone}>{a.phone}</div>
            <p className={styles.cardAddr}>{a.address}</p>
            <div className={styles.tags}>
              {a.tags.map((t) => (
                <span key={t} className={styles.tag}>
                  {t}
                </span>
              ))}
            </div>
            <div className={styles.cardActions}>
              <button onClick={() => toast("Remove")}>Remove</button>
              <button onClick={() => toast("Edit")}>Edit</button>
              <button onClick={() => toast("Set as default")}>
                Set as default
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
