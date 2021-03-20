// Constants
import { url } from '../constants/api_env';
// axios
import axios from 'axios';

export const postFetch=(dataType, params)=> {
    return async (dispatch) => {
        console.log("Params: ", params);
        console.log("API hit: ", (url+dataType));
        let res = await axios.post((url+dataType), params);
        let { data } = res.data;        
        console.log("Data", data);
        dispatch({
            type: dataType,
            payload: data,
        });
    }
}