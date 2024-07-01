import { format } from "date-fns";

class Task {
  constructor(name, description, date) {
    this.name = name;
    this.description = description;
    this.date = date;
  }
}

export default Task;
