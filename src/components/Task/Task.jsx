import styles from "./Task.module.css";
import Dots from "../../UI/icons/Dots";
import Checkbox from "../../UI/Checkbox/Checkbox";

const Task = ({ title, description, deadline, done }) => {
  const k = "k";

  return (
    <div className={styles.Task}>
      <Checkbox checked={done} onCheckbox={k} />
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <Dots />
        </div>
        <div className={styles.info}>
          <p className={styles.description}>{description}</p>
          <p className={styles.deadline}>{deadline}</p>
        </div>
      </div>
    </div>
  );
};

export default Task;
