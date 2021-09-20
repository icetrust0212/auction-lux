import {
    authHeader
} from '../_helpers';
import axios from '../api/axios';



const login = async (username, password) => {

    console.log('login url: ', process.env.REACT_APP_API_URL)
    try {

        let response = axios.post(`auth/signin`, {
                username,
                password
            })
            .then(handleResponse)
            .then(data => {
                console.log('success:', data)
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.clear();
                localStorage.setItem('user', JSON.stringify(data));

                return data;
            }, err => {
                return Promise.reject(JSON.stringify(err.response.data.message));
            });
        return response;
    } catch (error) {
        console.log('loginerror: ', error)
        return Promise.reject(error.response.data.message);
    };
}
const signUp = async (data) => {
    console.log('signUp url: ', process.env.REACT_APP_API_URL)
    try {
        let response = await axios.post(`auth/signup`, {
                ...data
            })
            .then(handleResponse)
            .then(data => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                // localStorage.setItem('user', JSON.stringify(user));
                return data;
            }, err => {
                return Promise.reject(err.response.data.message);
            });
        return response;
    } catch (e) {
        console.log('signup err: ', e, typeof e);
        return Promise.reject(e);
    }
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${process.env.REACT_APP_API_URL}/users`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    console.log('response: ', response)
    const data = response.data;
    if (response.status !== 200) {
        if (response.status === 401) {
            // auto logout if 401 response returned from api
            logout();
            window.location.reload(true);
        }

        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
    }
    console.log('handleresponsedata: ', data)
    return data;
}

const getProfile = async () => {
    try {
        let user = JSON.parse(localStorage.getItem('user'));
        let id = user.id;
        let response = axios.get(`auth/${id}`)
            .then(handleResponse)
            .then(data => {
                return data.user;
            }, err => {
                return Promise.reject(JSON.stringify(err.response.data.message));
            });
        return response;
    } catch (error) {
        console.log('loginerror: ', error)
        return Promise.reject(error.response.data.message);
    };
}

export const userService = {
    login,
    logout,
    getAll,
    signUp,
    getProfile,
};