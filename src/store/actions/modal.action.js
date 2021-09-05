import { modalConstants } from '../constants';
import { userService } from '../../services';

const showLoginModal = () => {
    return {
        type: modalConstants.SHOW_LOGIN_MODAL,
        payload: true
    }
}

const hideLoginModal = () => {
    return {
        type: modalConstants.HIDE_LOGIN_MODAL,
        payload: true
    }
}

const showSignUpModal = () => {
    return {
        type: modalConstants.SHOW_SIGNUP_MODAL,
        payload: true
    }
}

const hideSignUpModal = () => {
    return {
        type: modalConstants.HIDE_SIGNUP_MODAL,
        payload: true
    }
}


export const modalActions = {
    showLoginModal,
    hideLoginModal,
    showSignUpModal,
    hideSignUpModal
}