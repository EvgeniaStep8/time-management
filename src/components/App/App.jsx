import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Popup from "../Popup/Popup";

function App() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
  );

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleAddTask = (task) => {
    task.date = Date.now();
    task.done = false;
    task.id = tasks.length + 1;
    setTasks([task, ...tasks]);
    localStorage.setItem("tasks", JSON.stringify([task, ...tasks]));
  };

  const handleCheckTask = (newTask) => {
    const newTasks = tasks.map((task) =>
      task.id === newTask.id ? newTask : task
    );
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  return (
    <div className="App">
      <Header />
      <Main
        openPopup={openPopup}
        tasks={tasks}
        handleCheckTask={handleCheckTask}
      />
      <Footer />
      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        onSubmit={handleAddTask}
      />
    </div>
  );
}

export default App;
