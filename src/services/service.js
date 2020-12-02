import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react-native'
});

export default api;