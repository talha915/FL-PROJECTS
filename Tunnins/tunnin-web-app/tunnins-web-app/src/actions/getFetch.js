// Constants
import { url } from '../constants/api_env';
// axios
import axios from 'axios';
// Toaster
import { toast } from "react-toastify";

export const getFetch=(dataType)=> {
    return async (dispatch) => {
        let res = await axios.get(url+dataType);
        let data;
        if(res.data.hasOwnProperty('status')) {
            data = res.data.data;
            toast.success("MY SUCCESS");
        }
        else {
            data = res;
            toast.error("MY SUCCESS");
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