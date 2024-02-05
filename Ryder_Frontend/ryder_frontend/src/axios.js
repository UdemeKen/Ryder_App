import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:5001/api/v1'
});

axiosClient.interceptors.request.use((config) => {
    config.headers.Authorization = `${localStorage.getItem('TOKEN')}`;
    return config;
});

axiosClient.interceptors.response.use((response) => {
    return response;
    },
    error => {
        if(error.response && error.response.status === 401) {
            localStorage.removeItem('TOKEN');
            window.location.href = '/guest/signup';
        }
        return Promise.reject(error);
    }
);

export default axiosClient;