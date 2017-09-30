import { FETCHING_TODOS_SUCCESS, CLEAR_TODOS } from '../actions/constants';
const initialState = {
  data: [],
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_TODOS_SUCCESS:
      return { ...state, data: action.payload };
    case CLEAR_TODOS:
      return { ...state, data: []};
    default:
      return state;
  }
}
