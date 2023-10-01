import { v4 as uuidv4 } from "uuid";

export function reducer(currentState, action) {
  switch (action.type) {
    case "new": {
      const newTasks = [
        ...currentState,
        {
          id: uuidv4(),
          title: action.payload.newTaskTitle,
          details: "",
          isAchieved: false,
        },
      ];
      localStorage.setItem("tasks", JSON.stringify(newTasks));

      return newTasks;
    }

    case "get": {
      const allStoredTasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
      return allStoredTasks;
    }

    case "check": {
      const newTasks = currentState.map((task) => {
        if (task.id === action.payload.taskId) {
          const checkedTask = { ...task, isAchieved: !task.isAchieved };
          if (checkedTask.isAchieved === true) {
            // action.payload.showMySnackbar("تم انجاز المهمة");
          }
          return checkedTask;
        }

        return task;
      });

      localStorage.setItem("tasks", JSON.stringify(newTasks));

      return newTasks;
    }
      case "edit": {
              const newTasks = currentState.map((task) => {
                if (task.id === action.payload.taskId) {
                  return {
                    ...task,
                    title: action.payload.taskDescription.title,
                    details: action.payload.taskDescription.details,
                  };
                }
                return task;
              });
           
              localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    }
      case "delete": {
             const newTasks = currentState.filter((task) => {
               return task.id !== action.payload.taskId;
             });

             localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    }
      
    case ("delete all"): {
      const newTasks = []
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
      }

    default: {
      throw Error("unknown action : ", action.type);
    }
  }
}
