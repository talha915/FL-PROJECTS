// Constants
import { url, fine_res } from '../constants/api_env';
import { agora_key } from '../constants/constants';
// axios
import axios from 'axios';

export const patchFetch=(apiType, params)=> {
    return async (dispatch) => {     
        try {
            let res = await axios.patch((url+apiType), params);     
            console.log("Res: ", res);
            if(res.status === fine_res) {
                let { data } = res.data;
                dispatch({
                    type: agora_key,
                    payload: data,
                });
            }
        }
        catch(error) {
            console.log("Complete Err: ", error.response);
        }
    }
}
