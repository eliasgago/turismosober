import axios from 'axios'; 
import { router } from '@/config/router'

const client = axios.create ({ 
    baseURL: process.env.VUE_APP_API_BASE_URL, 
    timeout: process.env.VUE_APP_API_TIMEOUT, 
    headers: {'Content-Type': 'application/json'}, 
});

const authClient = axios.create ({ 
    baseURL: process.env.VUE_APP_API_BASE_URL, 
    timeout: process.env.VUE_APP_API_TIMEOUT, 
    headers: {'Content-Type': 'application/json'}, 
});
    
authClient.interceptors.request.use ( 
    config => { 
        const token = auth.getAccessToken(); 
        if (token) 
            config.headers.Authorization = `Bearer ${token}`;
        return config; 
    }, 
    error => { 
        return Promise.reject (error); 
    } 
);

authClient.interceptors.response.use(
    response => response, 
    error => {
        if(error.response && error.response.data && error.response.data.code && error.response.data.code == 'token_not_valid') {
            router.push({ name: 'login'});
            /*return auth.refreshToken().then(_ => {
                error.config.headers.Authorization = `Bearer  ${auth.getAccessToken()}`;
                return http.request(error.config);
            })*/
        }else{
            return Promise.reject(error);
        }
    });

const http = {
    client,
    authClient
}
export default http;