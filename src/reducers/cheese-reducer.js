import {
  CHEESE_GET_REQUEST,
  CHEESE_GET_SUCCESS,
  CHEESE_GET_FAILURE
} from '../actions/cheese-actions';
 
const initialState = {
  cheeses: ['Initial', 'Test', 'Cheese'],
  loading: false,
  error: null
}

export default function cheeseReducer(state=initialState, action){
  if (action.type === CHEESE_GET_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  } else if (action.type === CHEESE_GET_SUCCESS) {
    return Object.assign({}, state, {
      cheeses: action.cheeses,
      loading: false,
      error: null
    })
  } else if (action.type === CHEESE_GET_FAILURE) {
    return Object.assign({}, state, {
      loading: false,
      error: action.err
    });
  } else {
    return state;
  }
}