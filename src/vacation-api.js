import request from 'superagent';

const URL = process.env.REACT_APP_API_URL || 'localhost:3000';

export function signUp(userData) {
    return request.post(`${URL}/auth/signup`, userData);
}

export function signIn(userData) {
    return request.post(`${URL}/auth/signin`, userData);
}

export function getLocation(userData) {
    const token = localStorage.getItem('token');

    try {
        return request
            .get(`${URL}/api/location?search=${userData}`)
            .set('Authorization', token);
    } catch(e) {
        return { error: e.message }
    }
}

export function getBusinesses(lat, lon, keyword) {
    const token = localStorage.getItem('token');

    try {
        return request
            .get(`${URL}/api/reviews?latitude=${lat}&longitude=${lon}&keyword=${keyword}`)
            .set('Authorization', token);
    } catch(e) {
        return { error: e.message }
    }
}
