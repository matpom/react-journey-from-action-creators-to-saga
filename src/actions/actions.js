import { FETCHING_TODOS_SUCCESS, CLEAR_TODOS } from './constants';
import * as api from '../api/api'

export function fetchTodosSuccess(todos) {
  return {
    type: FETCHING_TODOS_SUCCESS,
    payload: todos,
  }
}

export function fetchTodos() {
  return (dispatch) => {
    api.fetchTodos()
      .then((data) => {
        dispatch(fetchTodosSuccess(data))
      })
      .catch((err) => console.log('err:', err))
  }
}


export function clearTodos() {
  return {
    type: CLEAR_TODOS,
  }
}
