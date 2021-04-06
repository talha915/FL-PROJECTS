// Constants
import { url } from '../constants/api_env';
// axios
import axios from 'axios';

export const getFetch=(dataType)=> {
    return async (dispatch) => {
        let res = await axios.get(url+dataType);
        let data;
        if(res.data.hasOwnProperty('status')) {
            data = res.data.data;
        }
        else {
            data = res;
        }
        //let { data } = res.data;
        console.log("Data: ", data);
        console.log("Data Type: ", dataType);
        dispatch({
            type: dataType,
            payload: data,
        });
    }
}