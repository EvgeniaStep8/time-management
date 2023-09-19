import { useState } from "react";
import useInputsChange from "../../hooks/useInputsChange";
import styles from "./Task.module.css";
import DeleteIcon from "../../UI/icons/DeleteIcon";
import EditIcon from "../../UI/icons/EditIcon";
import Checkbox from "../../UI/Checkbox/Checkbox";
import CloseIcon from "../../UI/icons/CloseIcon";
import SubmitButton from "../../UI/SubmitButton/SubmitButton";

const Task = ({ task, handleCheckTask, handleDeliteTask, handleTaskEdit }) => {
  // стейты для выбранной карточки и для режима редактирования
  const [isChecked, setChecked] = useState(task.done);
  const [isEdit, setEdit] = useState(false);

  // значение формы при открытии режима редактирования
  const initialValues = {
    title: task.title,
    description: task.description,
    dateDeadline: new Date(task.deadline).toISOString().slice(0, 10),
    timeDeadline: new Date(task.deadline).toISOString().slice(11, 19),
  };

  // подключаем хук для отслеживания изменений в инпутах
  const { values, resetForm, handleChange } = useInputsChange(initialValues);

  // определение класса для заголовка в зависимости от наличия режима редактированяи
  const titleClassName = isEdit
    ? `${styles.title} ${styles.titleInput}`
    : styles.title;

  // для отображения дата форматируем её в удобный вид
  const date = new Date(task.deadline).toLocaleString("ru", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

   // для отображения времени форматируем его в удобный вид
  const time = new Date(task.deadline).toLocaleTimeString("ru", {
    timeStyle: "short",
  });

  // обработчик клика на чекбокс карточки
  const handleCheckboxClick = () => {
    setChecked((state) => !state);
    task.done = !task.done;
    handleCheckTask(task);
  };

  // обработчик удаления карточки
  const onDelite = () => {
    handleDeliteTask(task.id);
  };

  // обработчик редактирования, переходим в режим формы
  const onEdit = () => {
    setEdit(true);
  };

  // закрытие формы, переход в режим чтения
  const onClose = () => {
    setEdit(false);
    resetForm();
  };

  // обработчик изменения задачи
  const onSubmit = (evt) => {
    evt.preventDefault();
    handleTaskEdit(task.id, values);
    setEdit(false);
  };

  return (
    <form className={styles.Task} onSubmit={onSubmit}>
      {!isEdit && (
        <Checkbox checked={isChecked} onCheckbox={handleCheckboxClick} />
      )}
      <div className={styles.container}>
        <div className={styles.header}>
          <input
            name="title"
            className={titleClassName}
            value={values.title}
            readOnly={!isEdit}
            onChange={handleChange}
          />
          {isEdit ? (
            <CloseIcon onClose={onClose} />
          ) : (
            <div className={styles.icons}>
              <EditIcon onEdit={onEdit} />
              <DeleteIcon onDelite={onDelite} />
            </div>
          )}
        </div>
        <div className={styles.info}>
          {isEdit ? (
            <input
              name="description"
              value={values.description}
              className={styles.input}
              readOnly={!isEdit}
              placeholder="Добавить описание"
              onChange={handleChange}
            />
          ) : (
            task.description !== "" && (
              <p className={styles.description}>{task.description}</p>
            )
          )}
          {isEdit ? (
            <div className={styles.footer}>
              <div>
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
              </div>
              <SubmitButton text="Сохранить" short />
            </div>
          ) : (
            <p className={styles.deadline}>{`${time}, ${date}`}</p>
          )}
        </div>
      </div>
    </form>
  );
};

export default Task;
