import {ADD_TASK} from "../constants/action-types"
import {DELETE_TASK} from "../constants/action-types"
export const addTask = task => ({ type: ADD_TASK, payload: task });
export const deleteTask = task => ({ type: DELETE_TASK, payload: task });