import axios from 'axios';

export const baseUrl = 'http://123.57.176.198:3000';

const axiosInstance = axios.create({
    baseURL: baseUrl
});

axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, '网络错误')
    }
);

export {
    axiosInstance
}