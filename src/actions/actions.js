import { FETCHING_TODOS_SUCCESS, CLEAR_TODOS } from './constants';
import { todos } from "../api/api";

export function fetchTodos() {
  return {
    type: FETCHING_TODOS_SUCCESS,
    payload: todos,
  }
}

export function clearTodos() {
  return {
    type: CLEAR_TODOS,
  }
}
