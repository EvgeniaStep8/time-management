import { useState } from "react";
import styles from "./TasksHeader.module.css";
import Select from "../../UI/Select/Select";

const TasksHeader = ({ count, countDone, openPopup, handleSortClick }) => {
  const [sortValue, setSortValue] = useState("date");

  // обработчик изменения селекта
  const onSelectChange = (evt) => {
    setSortValue(evt.target.value);
    handleSortClick(evt.target.value);
  };

  return (
    <div className={styles.TasksHeader}>
      <h1 className={styles.title}>Список задач</h1>
      <div className={styles.display}>
        <p className={styles.progress}>{`Выполнено ${countDone}/${count}`}</p>
        <div className={styles.buttons}>
          <Select value={sortValue} onChange={onSelectChange} />
          <button className={styles.add} type="button" onClick={openPopup}>
            + Новая задача
          </button>
        </div>
      </div>
    </div>
  );
};

export default TasksHeader;
