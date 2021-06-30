import axios from 'axios'
import store from '../store'
//import { authConstants } from '../actions/constants';
import { api } from '../urlConfig'
//const token = window.localStorage.getItem('token');
const axiosInstance = axios.create({
        baseURL : api ,
        //  headers : {
        //     'Authorization' : token ? `Bearer ${token}` : ''
        // }
})

export default axiosInstance