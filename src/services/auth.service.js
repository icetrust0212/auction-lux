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
                const username  = {data};
                const roles = {data};
                const accessToken = {data};
                const email = {data};
                localStorage.clear();
                const user = {username, roles, email, accessToken};
                localStorage.setItem('user', JSON.stringify(user));

                return user;
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
            });
        return response;
    } catch (e) {
        console.log('signup err: ', e.response);
        return Promise.reject(e.response.data.message);
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

export const userService = {
    login,
    logout,
    getAll,
    signUp
};