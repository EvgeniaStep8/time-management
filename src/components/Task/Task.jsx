import { useState } from "react";
import useInputsChange from "../../hooks/useInputsChange";
import styles from "./Task.module.css";
import DeleteIcon from "../../UI/icons/DeleteIcon";
import EditIcon from "../../UI/icons/EditIcon";
import Checkbox from "../../UI/Checkbox/Checkbox";
import CloseIcon from "../../UI/icons/CloseIcon";
import SubmitButton from "../../UI/SubmitButton/SubmitButton";

const Task = ({ task, handleCheckTask, handleDeliteTask, handleTaskEdit }) => {
  const [isChecked, setChecked] = useState(task.done);
  const [isEdit, setEdit] = useState(false);

  const initialValues = {
    title: task.title,
    description: task.description,
    dateDeadline: new Date(task.deadline).toISOString().slice(0, 10),
    timeDeadline: new Date(task.deadline).toISOString().slice(11, 19),
  };

  const { values, resetForm, handleChange } = useInputsChange(initialValues);

  const titleClassName = isEdit
    ? `${styles.title} ${styles.titleInput}`
    : styles.title;

  const date = new Date(task.deadline).toLocaleString("ru", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const time = new Date(task.deadline).toLocaleTimeString("ru", {
    timeStyle: "short",
  });

  const handleCheckboxClick = () => {
    setChecked((state) => !state);
    task.done = !task.done;
    handleCheckTask(task);
  };

  const onDelite = () => {
    handleDeliteTask(task.id);
  };

  const onEdit = () => {
    setEdit(true);
  };

  const onClose = () => {
    setEdit(false);
    resetForm();
  };

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
