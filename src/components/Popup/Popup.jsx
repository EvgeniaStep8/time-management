import useInputsChange from "../../hooks/useInputsChange";
import styles from "./Popup.module.css";

const Popup = ({ isOpen, onClose, onSubmit }) => {
  const className = isOpen
    ? `${styles.Popup} ${styles.openPopup}`
    : styles.Popup;

  const { values, setValues, handleChange } = useInputsChange({
    title: "",
    description: "",
    dateDeadline: "",
    timeDeadline: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(values);
    onClose();
    setValues({
      title: "",
      description: "",
      dateDeadline: "",
      timeDeadline: "",
    });
  };

  return (
    <div className={className}>
      <div className={styles.container}>
        <button className={styles.close} type="button" onClick={onClose} />
        <h2 className={styles.title}>Задача</h2>
        <form className={styles.form} name="popupForm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            className={styles.input}
            placeholder="Название"
            required
            value={values.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            className={styles.input}
            placeholder="Описание"
            value={values.description}
            onChange={handleChange}
          />
          <input
            type="date"
            name="dateDeadline"
            className={styles.date}
            required
            value={values.dateDeadline}
            onChange={handleChange}
          />
          <input
            type="time"
            name="timeDeadline"
            className={styles.time}
            required
            value={values.timeDeadline}
            onChange={handleChange}
          />
          <button className={styles.submit} type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
