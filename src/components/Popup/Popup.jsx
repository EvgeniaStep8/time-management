import styles from "./Popup.module.css";

const Popup = ({ isOpen, onClose, onSubmit }) => {
  const className = isOpen
    ? `${styles.Popup} ${styles.openPopup}`
    : styles.Popup;

  return (
    <div className={className}>
      <div className={styles.container}>
        <button className={styles.close} type="button" onClick={onClose} />
        <h2 className={styles.title}>Задача</h2>
        <form className={styles.form} name="popupForm" onSubmit={onSubmit}>
          <input
            type="text"
            name="tile"
            className={styles.input}
            placeholder="Название"
            required
          />
          <input
            type="text"
            name="description"
            className={styles.input}
            placeholder="Описание"
          />
          <input type="date" name="date" className={styles.date} required />
          <input type="time" name="time" className={styles.time} required />
          <button className={styles.submit} type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
