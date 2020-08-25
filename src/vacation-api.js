import request from 'superagent';

const URL = process.env.REACT_APP_API_URL;

export function signUp(userData) {
    return request.post(`${URL}/auth/signup`, userData);
}

export function signIn(userData) {
    return request.post(`${URL}/auth/signin`, userData);
}