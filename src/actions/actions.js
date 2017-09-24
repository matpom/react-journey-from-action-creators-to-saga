import { FETCHING_TODOS, FETCHING_TODOS_SUCCESS, FETCHING_TODOS_FAILURE } from './constants';

export function getTodos() {
  return {
    type: FETCHING_TODOS
  };
}

export function getTodosSuccess(data) {
  return {
    type: FETCHING_TODOS_SUCCESS,
    data,
  };
}

export function getTodosFailure() {
  return {
    type: FETCHING_TODOS_FAILURE
  };
}

export function fetchTodos() {}
