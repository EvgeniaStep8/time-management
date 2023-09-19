import useInputsChange from "../../hooks/useInputsChange";
import styles from "./Popup.module.css";
import SubmitButton from "../../UI/SubmitButton/SubmitButton";
import CloseIcon from "../../UI/icons/CloseIcon";

const Popup = ({ isOpen, onClose, onSubmit }) => {
  const className = isOpen
    ? `${styles.Popup} ${styles.openPopup}`
    : styles.Popup;

  const initialValues = {
    title: "",
    description: "",
    dateDeadline: "",
    timeDeadline: "",
  };

  const { values, resetForm, handleChange } = useInputsChange(initialValues);

  // при сабмите формы отменяем стандартное поведение и закрываем попап
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(values);
    close();
  };

  // при закрытии попапа очищаем форму
  const close = () => {
    onClose();
    resetForm();
  };

  return (
    <div className={className}>
      <div className={styles.container}>
        <CloseIcon onClose={close} className={styles.close} />
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
          <SubmitButton text="Сохранить" />
        </form>
      </div>
    </div>
  );
};

export default Popup;
