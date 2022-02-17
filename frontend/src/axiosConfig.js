import axios from 'axios';

axios.defaults.withCredentials = true;

axios.defaults.baseURL = window.location.origin;

const apiAxios = axios.create({
    withCredentials: true,
    baseURL: window.location.origin ,
});

export default apiAxios;