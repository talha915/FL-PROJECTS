// Constants
import { url } from '../constants/api_env';
import { upcoming_client_sessions, get_reviews, total_earnings, earning_details } from '../constants/constants';

// axios
import axios from 'axios';

// Toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export const getFetchParam = (apiType, param) => {
    return async (dispatch) => {
        try {
            let res = await axios.get((url + apiType + param));
            console.log("Res: ", res);
            console.log("Type: ", apiType);
            let data;
            if (res.data.hasOwnProperty('status')) {
                if (apiType === upcoming_client_sessions) {
                    data = res.data.sessions;
                    toast.success(res.data.message, {position: toast.POSITION.BOTTOM_RIGHT});
                }
                else if(apiType === get_reviews || apiType === total_earnings || apiType === earning_details) {
                    data = res.data;
                }
                else {
                    data = res.data.data;
                    toast.success(res.data.message, {position: toast.POSITION.BOTTOM_RIGHT});
                }
            }
            else {
                data = res;
                toast.success(res.message, {position: toast.POSITION.BOTTOM_RIGHT});
            }
            console.log("Data: ", data);
            dispatch({
                type: apiType,
                payload: data,
            });
        }
        catch(error) {
            console.log("Complete Err: ", error.response);
            //toast.error(error.response.data.message, {position: toast.POSITION.BOTTOM_RIGHT, autoClose: false});
            dispatch({
                type: apiType,
                payload: error.response,
            });
        }
    }
}