// Constants
import { url } from '../constants/api_env';
import { upcoming_client_sessions } from '../constants/constants';

// axios
import axios from 'axios';

export const getFetchParam=(apiType, param)=> {
    return async (dispatch) => {
        let res = await axios.get((url+apiType+param));
        console.log("Res: ", res);
        console.log("Type: ", apiType);
        let data;
        if(res.data.hasOwnProperty('status')) {
            if(apiType === upcoming_client_sessions) {
                data = res.data.sessions;
            }
            else {
                data = res.data.data;
            }
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