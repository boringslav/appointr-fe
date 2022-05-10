import axios from "axios";
import qs from "qs";

const BASE_URL = "http://localhost:8080";


export const getAllReq = async (entity, token) => {
    return await axios.get(`${BASE_URL}${entity}`, {
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
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
    return await axios.post(`${BASE_URL}/users/sign-in`, qs.stringify(data), {
        headers: {'content-type': 'application/x-www-form-urlencoded'}
    })
}

export const createBookingRequest = async ({title, description, bookingDate}, token) => {
    return await axios.post(`${BASE_URL}/bookings/new`, {
        title,
        description,
        bookingDate,
    }, {
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    })
}

export const bookBookingRequest = async (bookingId, token) => {
    return await axios.put(`${BASE_URL}/bookings/book/${bookingId}`, {}, {
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
}
export const deleteBookingRequest = async(bookingId, token) => {
    return await axios.delete(`${BASE_URL}/bookings/${bookingId}`, {
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
}