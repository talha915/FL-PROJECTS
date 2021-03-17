import localData from '../Data/Data.json';

// Constants
import { signup_profile, categories_list } from '../constants/constants';

import { url } from '../constants/api_env';

// axios
import axios from 'axios';

let cats = [];

const fetchCategories=async()=> {
    let res = await axios.get(url+categories_list);
    let { data } = res.data;
    return data;
}


export const signUpProfile=()=> {
    
    return {
        type: signup_profile,
        payload: localData.profile,
    }
}

