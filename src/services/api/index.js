import axios from "axios";

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
export const signInRequest = async ({name, password}) => {
    return await axios.post(`${BASE_URL}/users/sign-in`,{
        name,
        password
    })
}