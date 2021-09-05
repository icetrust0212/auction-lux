import {modalConstants} from '../constants';

const initialState = {
    loginModalShow: false,
    signUpModalShow: false,
}

export const modal = (state = initialState, {type, payload}) => {
    switch (type) {
      case modalConstants.SHOW_LOGIN_MODAL:
        return {
          loginModalShow: true
        };
      case modalConstants.HIDE_LOGIN_MODAL:
        return {
          loginModalShow: false
        };
      case modalConstants.SHOW_SIGNUP_MODAL:
        return { 
          signUpModalShow: true,
        };
      case modalConstants.HIDE_SIGNUP_MODAL:
        return { 
          signUpModalShow: false
        };
      default:
        return state
    }
  }
  
export const getLogInModalShowState = (state) => {
  return state.modal.loginModalShow;
}

export const getSignUpModalShowState = (state) => {
  return state.modal.signUpModalShow;
}
  