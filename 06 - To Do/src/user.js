import Project from "./project";
import Task from "./task";

class User {
  constructor() {
    if (localStorage.length == 0) {
      this.projects = {};
    } else {
      //Yup, you have to readd the objects methods after parsing the JSON.
      function addAddTaskMethod(obj) {
        obj.addTask = function (name, description, date) {
          const newTask = new Task(name, description, date);
          this.tasks[name] = newTask;
        };
      }
      const parsedJSON = JSON.parse(localStorage.getItem("projects"));
      for (let key in parsedJSON) {
        if (parsedJSON.hasOwnProperty(key)) {
          addAddTaskMethod(parsedJSON[key]);
        }
      }

      this.projects = parsedJSON;
    }
  }

  addProjectUser(projectName) {
    const newProject = new Project(projectName);
    this.projects[newProject.name] = newProject;

    localStorage.removeItem("projects");
    localStorage.setItem("projects", JSON.stringify(this.projects));
    // console.log(JSON.parse(localStorage.getItem("projects")));
  }
}

export default User;
