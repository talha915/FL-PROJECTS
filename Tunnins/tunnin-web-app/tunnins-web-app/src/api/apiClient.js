// Constant
import { url } from '../constants/api_env';

import { create } from 'apisauce';

const apiClient = create({
    baseURL: url,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

console.log("API: ", apiClient);

export default apiClient;