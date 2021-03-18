// Constants
import { categories_list } from '../constants/constants';
import { url } from '../constants/api_env';
// axios
import axios from 'axios';

export const fetchProfileCategories=()=> {
    return async (dispatch) => {
        let res = await axios.get(url+categories_list);
        let { data } = res.data;
        dispatch({
            type: categories_list,
            payload: data,
        });
    }
}