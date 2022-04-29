import axios from "axios";
import qs from 'qs';
const BASE_URL = "http://localhost:8080";


export const getAllReq = async (entity) => {
    return await axios.get(`${BASE_URL}${entity}`);
}
export const signUpRequest = async ({name, email, password, role}) => {
    return await axios.post(`${BASE_URL}/users/sign-up`, {
        name,
        email,
        password,
        role,
    })
}
export const signInRequest = async (data) => {
    return await axios.post(`${BASE_URL}/users/sign-in`,qs.stringify(data), {
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
    })
}