import styles from "./Tasks.module.css";
import Task from "../Task/Task";

const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            title={task.title}
            description={task.description}
            deadline={task.deadline}
            done={task.done}
            key={task.id}
          />
        ))
      ) : (
        <div className={styles.bubble}>
          <p className={styles.info}>Здесь пока пусто...</p>
        </div>
      )}
    </>
  );
};

export default Tasks;
