import axios from 'axios';
import storage from '../storage/storage';
import { jwtDecode } from 'jwt-decode';

const axiosInstance = axios.create({
    //baseURL: 'http://127.0.0.1:8000',
    baseURL: 'https://pensi-api-production.up.railway.app',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
});

export const axiosFormData = axios.create({
    baseURL: 'https://pensi-api-production.up.railway.app',
    headers: {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
});




export default axiosInstance;
