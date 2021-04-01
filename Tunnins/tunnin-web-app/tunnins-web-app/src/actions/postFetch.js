// Constants
import { url, fine_res } from '../constants/api_env';
import { user_logged_in } from '../constants/constants';
// axios
import axios from 'axios';

export const postFetch=(dataType, params)=> {
    return async (dispatch) => {     
        try {
            let res = await axios.post((url+dataType), params);     
            console.log("Res: ", res);
            if(res.status === fine_res) {
                let { data } = res.data;
                dispatch({
                    type: user_logged_in,
                    payload: data,
                });
            }
        }
        catch(error) {
            console.log("Complete Err: ", error.response);
            //console.log(error.response.data.message); 
        }
    }
}
