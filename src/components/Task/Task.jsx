import { useState } from "react";
import styles from "./Task.module.css";
import DeleteIcon from "../../UI/icons/DeleteIcon";
import EditIcon from "../../UI/icons/EditIcon";
import Checkbox from "../../UI/Checkbox/Checkbox";

const Task = ({ task, handleCheckTask, handleDeliteTask }) => {
  const [isChecked, setChecked] = useState(task.done);

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

  return (
    <div className={styles.Task}>
      <Checkbox checked={isChecked} onCheckbox={handleCheckboxClick} />
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{task.title}</h2>
          <div className={styles.icons}>
            <EditIcon onEdit={handleCheckTask} />
            <DeleteIcon onDelite={onDelite} />
          </div>
        </div>
        <div className={styles.info}>
          <p className={styles.description}>{task.description}</p>
          <p className={styles.deadline}>{`${time}, ${date}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Task;
