import axios from 'axios';

const api = axios.create({
    baseURL:"http://localhost:3001"
});
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';


export default api;