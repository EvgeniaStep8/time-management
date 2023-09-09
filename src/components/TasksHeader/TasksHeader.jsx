import styles from "./TasksHeader.module.css";

const TasksHeader = ({ count, countDone }) => {
  return (
    <div className={styles.TasksHeader}>
      <h1 className={styles.title}>Список задач</h1>
      <div className={styles.display}>
        <p className={styles.progress}>{`Выполнено ${countDone}/${count}`}</p>
        <div className={styles.buttons}>
          <button type="button" className={styles.sort}>
            Сортировать
          </button>
          <button className={styles.add} type="button">
            + Новая задача
          </button>
        </div>
      </div>
    </div>
  );
};

export default TasksHeader;
