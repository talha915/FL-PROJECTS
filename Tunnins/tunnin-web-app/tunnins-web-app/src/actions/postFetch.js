// Constants
import { url } from '../constants/api_env';
// axios
import axios from 'axios';

export const postFetch=(dataType, params)=> {
    return async (dispatch) => {
        let res = await axios.post(url+dataType, params);
        let { data } = res.data;
        dispatch({
            type: dataType,
            payload: data,
        });
    }
}