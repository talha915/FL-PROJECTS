// Constants
import { url } from '../constants/api_env';
// axios
import axios from 'axios';

export const getFetch=(dataType)=> {
    return async (dispatch) => {
        let res = await axios.get(url+dataType);
        let { data } = res.data;
        dispatch({
            type: dataType,
            payload: data,
        });
    }
}