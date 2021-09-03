import { userConstants } from '../constants';
import { userService } from '../../services';

export const userActions = {
    login,
    logout,
    getAll
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    console.log ('login: ', user);
                    dispatch(success(user));
                },
                error => {
                    console.log ('login: ', error);
                    dispatch(failure(error));
                    
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, payload: user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, payload: user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, payload: error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, payload: users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, payload: error } }
}