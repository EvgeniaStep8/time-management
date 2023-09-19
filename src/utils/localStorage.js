const getLocalStorageTasks = () => {
  return localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [];
}

const addLocalStorageTask = (task) => {
  let tasks = getLocalStorageTasks();
  tasks = [...tasks, task];
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

const setLocalStorageTasks = (newTasks) => {
  localStorage.setItem("tasks", JSON.stringify(newTasks));
}

export { getLocalStorageTasks, addLocalStorageTask, setLocalStorageTasks };