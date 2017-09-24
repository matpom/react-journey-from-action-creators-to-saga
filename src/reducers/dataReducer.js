import { FETCHING_TODOS, FETCHING_TODOS_SUCCESS, FETCHING_TODOS_FAILURE } from '../actions/constants';
const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
};

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case FETCHING_TODOS:
      return {
        ...state,
        data: [],
        isFetching: true
      };
    case FETCHING_TODOS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      };
    case FETCHING_TODOS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return state;
  }
}
