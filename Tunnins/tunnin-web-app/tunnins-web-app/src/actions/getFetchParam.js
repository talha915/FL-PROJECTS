// Constants
import { url } from '../constants/api_env';
// axios
import axios from 'axios';

export const getFetchParam=(apiType, param)=> {
    return async (dispatch) => {
        let res = await axios.get((url+apiType+param));
        let data;
        if(res.data.hasOwnProperty('status')) {
            data = res.data.data;
        }
        else {
            data = res;
        }
        console.log("Data: ", data);
        dispatch({
            type: apiType,
            payload: data,
        });
    }
}