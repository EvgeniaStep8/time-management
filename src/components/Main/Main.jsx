import styles from "./Main.module.css";
import Task from "../Task/Task";

const Main = () => {
  return (
    <main className={styles.Main}>
      <div className={styles.container}>
        <Task
          title="Taska"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga totam cupiditate, hic nulla cumque repellendus itaque vero eaque doloremque quo reiciendis laudantium, magni qui quaerat quasi provident officiis voluptatibus quam."
          deadline="Mart 5"
          done={true}
        />
      </div>
    </main>
  );
};

export default Main;
