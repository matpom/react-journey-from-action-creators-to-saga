import {
  CLEAR_TODOS, FETCH_TODOS_FULFILLED, FETCH_TODOS_PENDING,
  FETCH_TODOS_REJECTED
} from '../actions/constants';

const initialState = {
  data: [],
  pending: false,
  error: false,
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS_PENDING:
      return { ...state, pending: true };
    case FETCH_TODOS_FULFILLED:
      return { ...state, data: action.payload, pending: false };
    case FETCH_TODOS_REJECTED:
      return { ...state, pending: false, error: true };
    case CLEAR_TODOS:
      return initialState;
    default:
      return state;
  }
}
