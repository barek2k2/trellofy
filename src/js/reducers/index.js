import { ADD_TASK } from "../constants/action-types";
import { DELETE_TASK } from "../constants/action-types";
const initialState = {
  tasks: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case DELETE_TASK:
      let tasks = state.tasks.filter(task => task.id != action.payload.id)
      return { ...state, tasks: tasks };
    default:
      return state;
  }
};
export default rootReducer;