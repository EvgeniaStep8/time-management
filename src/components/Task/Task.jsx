import styles from "./Task.module.css";

const Task = ({ title, description, deadlineDate }) => {
  const k = "k";

  return (
    <div className={styles.Task}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <p>{`До ${deadlineDate}`}</p>
    </div>
  );
};

export default Task;
