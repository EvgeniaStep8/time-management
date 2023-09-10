import styles from "./Tasks.module.css";
import Task from "../Task/Task";

const Tasks = ({ tasks, handleCheckTask, handleDeliteTask }) => {
  return (
    <>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            handleCheckTask={handleCheckTask}
            handleDeliteTask={handleDeliteTask}
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
