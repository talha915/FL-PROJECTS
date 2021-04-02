// Constants
import { url, fine_res } from '../constants/api_env';
import { user_logged_in } from '../constants/constants';
// axios
import axios from 'axios';

export const postFetch = (dataType, params) => {
    return async (dispatch) => {
        try {
            console.log("Api Type: ", url+dataType);
            console.log("Params: ", params);
            let res = await axios.post((url+dataType), params);
            console.log("Res: ", res);
            if (res.status === fine_res) {
                let { data } = res.data;
                console.log("Data: ", data);
                dispatch({
                    type: dataType,
                    payload: data,
                    status: res.status
                });
            }
        }
        catch (error) {
            console.log("Complete Err: ", error.response);
            dispatch({
                type: dataType,
                payload: error.response,
            });
        }
    }
}
