import { ADD_TASK } from "../constants/action-types";
import { DELETE_TASK } from "../constants/action-types";
const initialState = {
  tasks: [
    {id: 1, title: "design db", status: 'todo'},{id: 2, title: "design db2", status: 'todo'},
    {id: 3, title: "design software", status: 'doing'}, {id: 4, title: "design software2", status: 'doing'},
    {id: 5, title: "manage funds", status: 'done'}, {id: 6, title: "manage more funds", status: 'done'}
    ],
  statuses: ['todo', 'doing', 'done']
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