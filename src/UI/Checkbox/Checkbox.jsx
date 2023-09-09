import styles from "./Checkbox.module.css";

const Checkbox = ({ checked, onCheckbox }) => (
  <label className={styles.Checkbox}>
    <input
      type="checkbox"
      className={styles.input}
      checked={checked}
      onChange={onCheckbox}
    />
    <span className={styles.checkboxVisible}></span>
  </label>
);

export default Checkbox;
