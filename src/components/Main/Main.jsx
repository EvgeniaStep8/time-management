import styles from "./Main.module.css";
import Tasks from "../Tasks/Tasks";
import TasksHeader from "../TasksHeader/TasksHeader";

const Main = ({
  openPopup,
  tasks,
  handleCheckTask,
  handleDeliteTask,
  handleSortClick,
  handleTaskEdit,
}) => {
  return (
    <main className={styles.Main}>
      <div className={styles.container}>
        <TasksHeader
          count={tasks.length}
          countDone={tasks.filter((task) => task.done).length}
          openPopup={openPopup}
          handleSortClick={handleSortClick}
        />
        <Tasks
          tasks={tasks}
          handleCheckTask={handleCheckTask}
          handleDeliteTask={handleDeliteTask}
          handleTaskEdit={handleTaskEdit}
        />
      </div>
    </main>
  );
};

export default Main;
