import { useState } from "react";
import { addLocalStorageTask, getLocalStorageTasks, setLocalStorageTasks } from "../../utils/localStorage";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Popup from "../Popup/Popup";

function App() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [tasks, setTasks] = useState(
    getLocalStorageTasks()
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

    addLocalStorageTask(task);
    setTasks(getLocalStorageTasks());
  };

  const handleCheckTask = (newTask) => {
    const newTasks = tasks.map((task) =>
      task.id === newTask.id ? newTask : task
    );
    setLocalStorageTasks(newTasks);
    setTasks(getLocalStorageTasks());
  };

  const handleDeliteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setLocalStorageTasks(updatedTasks);
    setTasks(getLocalStorageTasks());
  };

  const handleTaskEdit = (
    id,
    { title, description, dateDeadline, timeDeadline }
  ) => {
    const date = +new Date(`${dateDeadline} ${timeDeadline}`);

    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            title: title,
            description: description,
            deadline: date,
          }
        : task
    );
    setLocalStorageTasks(updatedTasks);
    setTasks(getLocalStorageTasks());
  };

  const handleSortClick = (field) => {
    const sortedTask = tasks
      .slice()
      .sort((task1, task2) => +task1[field] - +task2[field]);
    setTasks(sortedTask);
  };

  return (
    <div className="App">
      <Header />
      <Main
        openPopup={openPopup}
        tasks={tasks}
        handleCheckTask={handleCheckTask}
        handleDeliteTask={handleDeliteTask}
        handleSortClick={handleSortClick}
        handleTaskEdit={handleTaskEdit}
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
