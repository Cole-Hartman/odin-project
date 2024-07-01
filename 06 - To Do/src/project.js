import Task from "./task";

class Project {
  constructor(name) {
    this.name = name;
    this.tasks = {};
  }

  addTask(name, description, date) {
    const newTask = new Task(name, description, date);
    this.tasks[name] = newTask;
  }
}

export default Project;
