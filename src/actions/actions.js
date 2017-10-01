import { FETCH_TODOS, CLEAR_TODOS } from './constants';
import * as api from '../api/api'

export function fetchTodos() {
  return {
    type: FETCH_TODOS,
    payload: api.fetchTodos(),
  }
}

export function clearTodos() {
  return {
    type: CLEAR_TODOS,
  }
}
