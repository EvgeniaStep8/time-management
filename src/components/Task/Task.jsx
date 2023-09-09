import styles from "./Task.module.css";
import Checkbox from "../../UI/Checkbox/Checkbox";

const Task = ({ title, description, deadline, done }) => {
  const k = "k";

  return (
    <div className={styles.Task}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.deadline}>{deadline}</p>
      </div>
      <Checkbox checked={done} onCheckbox={k} />
    </div>
  );
};

export default Task;
