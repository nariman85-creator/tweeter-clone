import axios ,{ AxiosRequestConfig} from "axios";

axios.interceptors.request.use((config)=> {
    config.headers['token']=window.localStorage.getItem('token');
    return config;
});
export {axios};