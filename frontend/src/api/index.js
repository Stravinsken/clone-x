import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000,
})

const authApi = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000,
})

authApi.interceptors.request.use(config => {
    const token = localStorage.getItem('access_token');
    if(token){
        config.headers['Authorization'] = 'Bearer ' + token
    }
    return config;
}, error => {
    return Promise.reject(error);
});
export { api, authApi }