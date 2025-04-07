import axios from 'axios';
import storage from '../storage/storage';
import { jwtDecode } from 'jwt-decode';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
});






export default axiosInstance;