import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-da560.firebaseio.com/'
});

export default instance;