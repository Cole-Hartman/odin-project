import User from "./user";
import { format, addDays } from "date-fns";

// Hamburger Menu
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

class DOMHandler {
  constructor() {
    // localStorage.clear();
    this.newProjectButton = document.querySelector("#new-project-button");
    this.newProjectFormContainer = document.querySelector(
      "#main-new-project-form"
    );
    this.newProjectSubmit = document.querySelector("#new-project-submit");
    this.newProjectForm = document.querySelector("#new-project-form");
    this.newTaskForm = document.querySelector("#main-new-task-form");
    this.newTaskSubmit = document.querySelector("#new-task-submit");
    this.projectTitle = document.querySelector("#project-title");
    this.allProjects = document.querySelector("#all-projects");
    this.mainPannel = document.querySelector("#main-pannel");
    this.currTaskView = "";

    this.user = new User();
    this.initialize();
  }

  initialize() {
    this.newProjectButton.addEventListener("click", () => {
      this.newProjectFormContainer.classList.remove("hidden");
    });

    //New Project Submit
    this.newProjectForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission

      //Remove curr task view
      if (this.currTaskView != "") {
        const currTaskView = document.querySelector(`#${this.currTaskView}`);
        if (currTaskView) {
          this.mainPannel.removeChild(currTaskView);
        }
      }

      if (this.projectTitle.value.trim() !== "") {
        this.user.addProjectUser(this.projectTitle.value);
        this.newProjectFormContainer.classList.add("hidden");
        this.render(this.projectTitle.value);
        this.projectTitle.value = "";
      }
    });

    //Default Project 1
    if (localStorage.length == 0) {
      this.user.addProjectUser("Project 1");
      this.user.projects["Project 1"].addTask(
        "Feed the dog",
        "Default Project",
        "01/14"
      );
      localStorage.removeItem("projects");
      localStorage.setItem("projects", JSON.stringify(this.user.projects));
    }

    //Add event listener to new task form submit
    this.newTaskSubmit.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission
      this.handleNewTask();
    });

    //Load all projects on start
    for (let key in this.user.projects) {
      let project = this.user.projects[key];
      const newProjectCell = this.buildProjectCell(project.name);
      this.allProjects.appendChild(newProjectCell);
    }
  }

  //Renders the changes to the page
  render(projectTitle) {
    //Build the project cell
    const newProjectCell = this.buildProjectCell(projectTitle);
    this.allProjects.appendChild(newProjectCell);

    //Build the project's task view
    const newTaskView = this.buildTaskView(this.user.projects[projectTitle]);
    this.mainPannel.appendChild(newTaskView);
  }

  handleNewTask() {
    this.newTaskForm.classList.add("hidden");

    //Get current project
    let strippedName = this.currTaskView
      .replace("task-view-", "")
      .replace("-", " ");
    const currProject = this.user.projects[strippedName];
    //Get form info
    const taskTitle = document.getElementById("task-title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("due-date").value;
    // Add new task to current project
    currProject.addTask(taskTitle, description, dueDate);
    localStorage.removeItem("projects");
    localStorage.setItem("projects", JSON.stringify(this.user.projects));

    //Build task view with new task
    const newTaskView = this.buildTaskView(currProject);
    this.mainPannel.appendChild(newTaskView);
  }

  // Build the project cell
  buildProjectCell(projectTitle) {
    const sideProjectCell = document.createElement("div");
    sideProjectCell.id = `desktop-${projectTitle}`;
    sideProjectCell.className = "flex";

    const sideProject = document.createElement("button");
    sideProject.className = "font-sans text-xl text-gray-400 py-2 ps-6 pe-0";
    sideProject.id = projectTitle;
    sideProject.innerHTML = `▪ ${projectTitle}`;
    sideProjectCell.appendChild(sideProject);

    const trashCan = document.createElement("button");
    trashCan.id = projectTitle;
    trashCan.className =
      "md:w-9 lg:w-20 xl:w-20 flex items-center justify-end text-xl";
    trashCan.innerHTML = "🗑️";
    sideProjectCell.appendChild(trashCan);

    sideProject.addEventListener("click", (event) => {
      //Remove current task view
      if (this.currTaskView != "") {
        const currTaskView = document.querySelector(`#${this.currTaskView}`);
        if (currTaskView) {
          this.mainPannel.removeChild(currTaskView);
        }
      }

      //Add new task view
      const newTaskView = this.buildTaskView(
        this.user.projects[event.currentTarget.id]
      );
      this.mainPannel.appendChild(newTaskView);
    });

    trashCan.addEventListener("click", (event) => {
      localStorage.removeItem("projects");
      this.allProjects.removeChild(sideProjectCell); //Remove Project Cell
      delete this.user.projects[projectTitle]; //Remove project from user
      localStorage.setItem("projects", JSON.stringify(this.user.projects));

      //Remove current task view
      if (this.currTaskView != "") {
        const currTaskView = document.querySelector(`#${this.currTaskView}`);
        this.mainPannel.removeChild(currTaskView);
      }
    });

    return sideProjectCell;
  }

  // Build the HTML for the task view
  buildTaskView(project) {
    const taskView = document.createElement("div");
    this.currTaskView = `task-view-${project.name.replace(/ /g, "-")}`;
    taskView.id = `task-view-${project.name.replace(/ /g, "-")}`;
    taskView.className =
      "h-4/5 w-5/6 bg-cblack-500 border border-cblack-500 rounded-3xl";

    const projectName = document.createElement("div");
    projectName.className = "text-3xl text-gray-300 pl-8 pt-11";
    projectName.innerHTML = `${project.name.replace(/-/g, " ")}`;
    taskView.appendChild(projectName);

    //All tasks for project
    const taskCellWrapper = document.createElement("div");
    taskCellWrapper.id = "task-cell-wrapper";
    taskCellWrapper.className = "ml-7 mr-8 md:mr-20 my-5 h-4/5";
    taskView.appendChild(taskCellWrapper);

    //Dynamically add tasks from project
    //Use a for loop to iterate through and add each task using the html template
    for (let task in project.tasks) {
      const taskCell = document.createElement("div");
      taskCell.id = "task-cell";
      taskCell.className =
        "flex items-center my-2 text-sm sm:text-lg md:text-xl text-gray-300 gap-2 md:gap-8";
      taskCellWrapper.appendChild(taskCell);

      const level = document.createElement("div");
      level.id = "level";
      level.className = "ml-1";
      level.innerHTML = "🟢";
      taskCell.appendChild(level);

      const name = document.createElement("div");
      name.id = "name";
      name.classList = "w-2/3";
      name.innerHTML = project.tasks[task].name;
      taskCell.appendChild(name);

      const date = document.createElement("div");
      date.id = "date";
      const plusOneDay = addDays(project.tasks[task].date, 1);
      const formattedDate = format(plusOneDay, "MM dd");
      date.innerHTML = formattedDate;
      taskCell.appendChild(date);
      // const formattedDate = dateFns.format(new Date(dateInput), 'MMMM dd');

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "rounded-checkbox pr-5 mr-2 z-[2]";
      checkbox.id = "terms";
      checkbox.name = "terms";
      checkbox.value = "accepted";
      taskCell.appendChild(checkbox);

      const trash = document.createElement("button");
      trash.id = "trash";
      trash.innerHTML = "🗑️";
      taskCell.appendChild(trash);

      trash.addEventListener("click", () => {
        taskCellWrapper.removeChild(taskCell);
        delete project.tasks[task];
        localStorage.removeItem("projects");
        localStorage.setItem("projects", JSON.stringify(this.user.projects));
      });
    }

    const newTaskButton = document.createElement("button");
    newTaskButton.id = "new-task-button";
    newTaskButton.className =
      "text-white text-3xl absolute right-20 bottom-10 md:right-32 lg:right-44 md:bottom-32 z-0";
    newTaskButton.innerHTML = "+ Add";
    taskView.appendChild(newTaskButton);

    newTaskButton.addEventListener("click", () => {
      this.newTaskForm.classList.remove("hidden");
    });

    if (this.currTaskView != "") {
      const currTaskView = document.querySelector(`#${this.currTaskView}`);
      if (currTaskView) {
        // if (`task-view-${event.currentTarget.id}` == taskView.id) {
        this.mainPannel.removeChild(currTaskView);
      }
    }
    return taskView;
  }
}

export default DOMHandler;
