import axios from "axios";
import {API_KEY, baseURL} from "../constants";


const axiosService = axios.create({baseURL});
axiosService.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${API_KEY}`;
    return config;
})

export {
    axiosService
}