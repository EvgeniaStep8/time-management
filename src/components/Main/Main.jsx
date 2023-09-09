import styles from "./Main.module.css";
import { tasks } from "../../utils/tasks";
import Tasks from "../Tasks/Tasks";

const Main = () => {
  return (
    <main className={styles.Main}>
      <div className={styles.container}>
        <Tasks tasks={tasks} />
      </div>
    </main>
  );
};

export default Main;
