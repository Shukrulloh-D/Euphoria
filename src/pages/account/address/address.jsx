import { useToast } from "shared/lib/toast";
import { Input } from "shared/ui/input";
import styles from "./address.module.css";

export const AddressPage = () => {
  const toast = useToast();
  return (
    <>
      <h1 className={styles.title}>Add Address</h1>
      <div className={styles.fields}>
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
        <Input placeholder="Country / Region" />
        <Input placeholder="Company Name" />
        <Input placeholder="Street Address" />
        <Input placeholder="Apt, suite, unit" />
        <Input placeholder="City" />
        <Input placeholder="State" />
        <Input placeholder="Phone" />
        <Input placeholder="Postal Code" />
      </div>
      <label className={styles.label}>Delivery Instruction</label>
      <textarea
        className={styles.textarea}
        placeholder="Delivery Instruction"
      />
      <div className={styles.checks}>
        <label>
          <input type="checkbox" /> Set as default shipping address
        </label>
        <label>
          <input type="checkbox" /> Set as default billing address
        </label>
      </div>
      <div className={styles.actions}>
        <button className="btn btn-primary" onClick={() => toast("Saved!")}>
          Save
        </button>
        <button className="btn btn-outline" onClick={() => toast("Cancelled")}>
          Cancel
        </button>
      </div>
    </>
  );
};
