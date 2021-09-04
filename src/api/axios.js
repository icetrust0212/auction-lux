import axios from 'axios'
import { authHeader, getToken } from '../_helpers';

axios.defaults.baseURL = process.env.REACT_APP_API_URL || '/api'
axios.defaults.headers.common['Authorization'] = getToken()

export default axios
