import axios from "axios";

const instance = axios.create({
    baseURL: 'https://amazon-backenddhruv.herokuapp.com'
});

export default instance;