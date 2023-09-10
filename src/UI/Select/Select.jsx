import styles from "./Select.module.css";

const Select = ({ value, onChange }) => (
  <label className={styles.Select}>
    <span className={styles.label}>Сортировать</span>
    <select className={styles.list} value={value} onChange={onChange}>
      <option value="date">Дата создания</option>
      <option value="deadline">Дедлайн</option>
    </select>
  </label>
);

export default Select;
