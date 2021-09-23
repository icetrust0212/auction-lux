import { userConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? 
{
  loggedIn: true, user, loggingIn: false, error: '', profile: null, loadingProfile: false
} : 
{
  loggedIn: false, user: null, loggingIn: false, error: ''
};

export function authentication(state = initialState, {type, payload}) {
  switch (type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        user: payload,
        error: ''
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        loggingIn: false,
        user: payload,
        error: ''
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false,
        loggingIn: false,
        error: payload
      };
    case userConstants.LOGOUT:
      return {
        ...state,
        loggingIn: false,
        loggedIn: false,
        error: '',
        user: null
      };
    case userConstants.SIGNUP_REQUEST:
      return {
        ...state,
        singingUp: true,
        signedUp: false,
        error: ''
      }
    case userConstants.SIGNUP_SUCCESS:
      return {
        ...state,
        singingUp: false,
        signedUp: true,
        error: ''
      }
    case userConstants.SIGNUP_FAILURE:
      return {
        ...state,
        singingUp: false,
        signedUp: false,
        error: payload
      }
    case userConstants.GET_PROFILE: 
      return {
        ...state,
        profile: payload,
        loadingProfile: false
      }
    case userConstants.PROFILE_LOADING:
      return {
        ...state,
        loadingProfile: payload
      }
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


export const getSigningUpState = (state) => {
  return state.authentication.singingUp;
}

export const getSignedUpState = (state) => {
  return state.authentication.signedUp;
}

export const getError = (state) => {
  return state.authentication.error;
}

export const getProfile = (state) => {
  return state.authentication.profile;
}

export const getProfileLoadingState = (state) => {
  return state.authentication.loadingProfile;
}

export const getUserToken = (state) => {
  return state.authentication.user;
}

export const getIsAdmin = (state) => {
 return state.authentication.user ? state.authentication.user.roles?.indexOf('ADMIN') !== -1 : false;
}