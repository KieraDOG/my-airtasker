import { LOG_IN_REQUEST, LOG_IN_SUCCESSFUL, LOG_IN_FAILED } from './types';

const initialState = {
  user: null,
  message: null,
  loading: false,
};

const authentication = (state = initialState, action) => {
  switch(action.type) {
    case LOG_IN_REQUEST: 
      return {
        ...state,
        user: null,
        loading: true,
      }

    case LOG_IN_SUCCESSFUL:
      return {
        ...state,
        user: action.payload,
        message: null,
        loading: false,
      }

    case LOG_IN_FAILED:
      return {
        ...state,
        message: action.payload,
        loading: false,
      }
    
    default:
      return state;
  }
}

export default authentication;