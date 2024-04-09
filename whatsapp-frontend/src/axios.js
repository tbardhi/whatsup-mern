import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://whatsapp-mern-tao.herokuapp.com'
});

export default instance;