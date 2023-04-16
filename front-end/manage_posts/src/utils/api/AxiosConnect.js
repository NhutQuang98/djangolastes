import axios from 'axios';
import Cookies from 'js-cookie';

// const SERVER_URL = axios.create({
//     baseURL: 'http://35.79.219.250/api/v1',
// })

// const LOCALHOST_URL = axios.create({
//     baseURL: 'http://localhost/api/v1',
// })

// axios.defaults.withCredentials = true; // cho phép sử dụng cookie

// const SERVER_URL = axios.interceptors.request.use(
//     (config) => {
//         const token = getCookie('access_token'); // lấy mã thông báo từ cookie
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`; // thêm mã thông báo vào header của yêu cầu
//         }
//         return config;
//     },
//     (error) => {    
//         return Promise.reject(error);
//     }
// )

export const SERVER_URL = axios.create({
    baseURL: 'http://localhost:8000/api/',
    // headers: {'Authorization': 'Bearer ' + Cookies.get('refresh_token')}
    headers: {
        'Authorization': 'Bearer ' + Cookies.get('access_token'),
    }
})

export const SERVER_URL_LOGIN = axios.create({
    baseURL: 'http://localhost:8000/api/'
})