import Project from "./Project";
import Task from "./task";
import ToDoList from "./todo";

export default class UI {

    static loadHomepage() {
        UI.loadProjects();
        UI.initProjectButtons();
        //UI.openProject();
    }

    static loadProjects() {
        //Implemented with Storage
    }

    static loadTasks(projectName) {
        //Implemented with storage
    }

    static loadProjectContent() {
        
    }

}