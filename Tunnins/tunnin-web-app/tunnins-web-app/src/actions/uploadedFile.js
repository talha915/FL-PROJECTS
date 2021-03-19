// Constants
import { uploaded_file } from '../constants/constants';

export const uploadFile=(data)=> {
    return {
        type: uploaded_file,
        payload: data,
    }
}

