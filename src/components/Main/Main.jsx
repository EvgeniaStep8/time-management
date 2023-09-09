import styles from "./Main.module.css";
import { tasks } from "../../utils/tasks";
import Tasks from "../Tasks/Tasks";
import TasksHeader from "../TasksHeader/TasksHeader";

const Main = () => {
  return (
    <main className={styles.Main}>
      <div className={styles.container}>
        <TasksHeader
          count={tasks.length}
          countDone={tasks.filter((task) => task.done).length}
        />
        <Tasks tasks={tasks} />
      </div>
    </main>
  );
};

export default Main;
