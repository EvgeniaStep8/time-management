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

  const handleAddTask = ({
    title,
    description,
    dateDeadline,
    timeDeadline,
  }) => {
    const date = +new Date(`${dateDeadline} ${timeDeadline}`);
    const task = {
      title: title,
      description: description,
      date: Date.now(),
      deadline: date,
      done: false,
      id: tasks.length,
    };
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

  const handleDeliteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="App">
      <Header />
      <Main
        openPopup={openPopup}
        tasks={tasks}
        handleCheckTask={handleCheckTask}
        handleDeliteTask={handleDeliteTask}
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
