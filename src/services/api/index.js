import axios from "axios";

const BASE_URL = "http://localhost:8080";


export const getAllReq = async (entity) => {
    return await axios.get(`${BASE_URL}${entity}`);
}