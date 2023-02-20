import {
  FETCH_GREETING_REQUEST,
  FETCH_GREETING_SUCCESS,
  FETCH_GREETING_FAILURE
} from '../actions/index';

const initialState = {
  message: null,
  loading: false,
  error: null
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETING_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_GREETING_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
        error: null
      };
    case FETCH_GREETING_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default greetingReducer;
