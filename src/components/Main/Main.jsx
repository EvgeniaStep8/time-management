import styles from "./Main.module.css";
import Tasks from "../Tasks/Tasks";
import TasksHeader from "../TasksHeader/TasksHeader";

const Main = ({ openPopup, tasks, handleCheckTask }) => {
  return (
    <main className={styles.Main}>
      <div className={styles.container}>
        <TasksHeader
          count={tasks.length}
          countDone={tasks.filter((task) => task.done).length}
          openPopup={openPopup}
        />
        <Tasks tasks={tasks} handleCheckTask={handleCheckTask} />
      </div>
    </main>
  );
};

export default Main;
