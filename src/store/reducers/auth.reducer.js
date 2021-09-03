import { userConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user, loggingIn: false } : {loggedIn: false, user: null, loggingIn: false};

export function authentication(state = initialState, {type, payload}) {
  switch (type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        user: payload
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        loggingIn: false,
        user: payload
      };
    case userConstants.LOGIN_FAILURE:
      return {
      };
    case userConstants.LOGOUT:
      return {
      };
    default:
      return state
  }
}

export const getLoggingInState = (state) => {
  return state.authentication.loggingIn;
}

export const getLoggedInState = (state) => {
  return state.authentication.loggedIn;
}